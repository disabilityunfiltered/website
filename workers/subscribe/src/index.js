// Email signup endpoint for disabilityunfiltered.com.au.
// Receives the Follow page form, adds the address to Resend's General segment.
// Secrets: RESEND_API_KEY (wrangler secret). Vars: see wrangler.toml.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const cors = corsHeaders(origin, env);

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    if (request.method !== "POST") return new Response("Method not allowed", { status: 405, headers: cors });

    const { email, honeypot, wantsJson } = await readBody(request);
    const back = (status) => reply(wantsJson, status, env, cors);

    // Bots fill every field; humans never see this one. Pretend it worked.
    if (honeypot) return back("ok");
    if (!email || !EMAIL_RE.test(email) || email.length > 254) return back("invalid");

    const res = await fetch("https://api.resend.com/contacts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        unsubscribed: false,
        segments: [{ id: env.RESEND_SEGMENT_ID }]
      })
    });

    if (res.ok) {
      await sendWelcome(email, env);
      return back("ok");
    }
    const err = await res.json().catch(() => ({}));
    // Already on the list counts as success from the visitor's point of view (no second welcome).
    if (res.status === 409 || /already exists/i.test(err.message || "")) return back("ok");
    console.error("Resend error", res.status, err);
    return back("error");
  }
};

async function sendWelcome(email, env) {
  const site = env.SITE_URL;
  const text = [
    "Thanks for following Disability Unfiltered.",
    "",
    "You'll get one email each time a new episode is out, with the episode link and a short summary. Nothing else.",
    "",
    `Episodes: ${site}/episodes/`,
    `Want to share your story? ${site}/be-a-guest/`,
    "",
    "If you didn't sign up, ignore this email or reply and we'll remove you.",
    "Disability Unfiltered, a podcast from Hearts In Action."
  ].join("\n");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: env.FROM_ADDRESS,
      to: [email],
      reply_to: env.REPLY_TO,
      subject: "You're following Disability Unfiltered",
      text
    })
  });
  if (!res.ok) console.error("Welcome email failed", res.status, await res.text());
}

async function readBody(request) {
  const type = request.headers.get("Content-Type") || "";
  let data = {};
  let wantsJson = false;
  if (type.includes("application/json")) {
    data = await request.json().catch(() => ({}));
    wantsJson = true;
  } else {
    const form = await request.formData().catch(() => null);
    if (form) data = Object.fromEntries(form.entries());
    wantsJson = (request.headers.get("Accept") || "").includes("application/json");
  }
  return {
    email: String(data.email || "").trim().toLowerCase(),
    honeypot: String(data.website || "").trim(),
    wantsJson
  };
}

function reply(wantsJson, status, env, cors) {
  if (wantsJson) {
    const code = status === "ok" ? 200 : status === "invalid" ? 400 : 502;
    return new Response(JSON.stringify({ status }), {
      status: code,
      headers: { ...cors, "Content-Type": "application/json" }
    });
  }
  // No-JS fallback: send the browser back to the Follow page with a status flag.
  return Response.redirect(`${env.SITE_URL}/follow/?subscribe=${status}#email`, 303);
}

function corsHeaders(origin, env) {
  const allowed = origin === env.SITE_URL ? origin : env.SITE_URL;
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Accept",
    "Vary": "Origin"
  };
}
