// Three-bar menu toggle for small screens (components/header.njk).
// The button is hidden in HTML so a no-JS visitor just sees the full menu.
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("main-nav");
  if (!toggle || !menu) return;

  toggle.hidden = false;
  document.documentElement.classList.add("has-nav-toggle");

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    menu.classList.toggle("is-open", open);
  }

  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });

  // Reset if the viewport grows past the mobile breakpoint while the menu is open
  var mq = window.matchMedia("(min-width: 861px)");
  mq.addEventListener("change", function (e) { if (e.matches) setOpen(false); });
})();
