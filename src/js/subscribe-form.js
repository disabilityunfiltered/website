// Progressive enhancement for components/subscribe-form.njk.
// Without this script the form still posts and the worker redirects back.
(function () {
  var form = document.querySelector(".subscribe-form");
  if (!form) return;
  var input = form.querySelector('input[name="email"]');
  var button = form.querySelector('button[type="submit"]');
  var status = form.querySelector("[data-status]");

  var messages = {
    ok: "You're on the list. We'll email you when the next episode is out.",
    invalid: "That email address doesn't look right. Please check it and try again.",
    error: "Something went wrong on our end. Please try again in a minute, or email hello@disabilityunfiltered.com.au."
  };

  function show(kind) {
    status.textContent = messages[kind] || "";
    status.setAttribute("data-status", kind || "");
    input.setAttribute("aria-invalid", kind === "invalid" ? "true" : "false");
    if (kind === "ok") form.reset();
  }

  // No-JS round trip lands here with ?subscribe=ok|invalid|error
  var flag = new URLSearchParams(location.search).get("subscribe");
  if (flag) {
    show(flag);
    history.replaceState(null, "", location.pathname + location.hash);
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var email = input.value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      show("invalid");
      input.focus();
      return;
    }
    button.disabled = true;
    status.textContent = "Adding you now...";
    status.setAttribute("data-status", "");
    fetch(form.action, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ email: email, website: form.elements.website.value })
    })
      .then(function (res) { return res.json().catch(function () { return { status: "error" }; }); })
      .then(function (data) { show(data.status === "ok" ? "ok" : data.status === "invalid" ? "invalid" : "error"); })
      .catch(function () { show("error"); })
      .then(function () { button.disabled = false; });
  });
})();
