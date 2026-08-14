// 3D episode reel: arrow buttons, sideways drag, and arrow keys move the fan.
// Cards more than 2 steps from the centre are hidden.
(function () {
  var stage = document.querySelector("[data-reel]");
  if (!stage) return;
  var cards = Array.prototype.slice.call(stage.querySelectorAll("[data-reel-card]"));
  if (!cards.length) return;

  var section = stage.closest(".episode-reel");
  var current = 0;
  var STEP_X = 0.62; // fraction of card width per step sideways

  function render() {
    cards.forEach(function (card, i) {
      var d = i - current;
      var visible = Math.abs(d) <= 2;
      card.classList.toggle("is-visible", visible);
      card.classList.toggle("is-active", d === 0);
      var x = d * STEP_X * 100;         // percent of card width
      var rot = d === 0 ? 0 : (d > 0 ? -1 : 1) * Math.min(Math.abs(d) * 22, 44);
      var scale = 1 - Math.min(Math.abs(d) * 0.13, 0.4);
      var z = -Math.abs(d) * 140;
      card.style.transform =
        "translateX(calc(-50% + " + x + "%)) translateZ(" + z + "px) rotateY(" + rot + "deg) scale(" + scale + ")";
      card.style.zIndex = String(100 - Math.abs(d));
      card.setAttribute("aria-hidden", visible ? "false" : "true");
      if (!visible) card.style.opacity = "";
    });
  }

  function go(delta) {
    current = Math.max(0, Math.min(cards.length - 1, current + delta));
    render();
  }

  var prev = section.querySelector("[data-reel-prev]");
  var next = section.querySelector("[data-reel-next]");
  if (prev) prev.addEventListener("click", function () { go(-1); });
  if (next) next.addEventListener("click", function () { go(1); });

  section.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") { go(-1); e.preventDefault(); }
    if (e.key === "ArrowRight") { go(1); e.preventDefault(); }
  });

  // Drag: every 70px of sideways travel advances one card. A real drag
  // suppresses the click so card links still work on a plain tap.
  var startX = null;
  var dragged = false;
  stage.addEventListener("pointerdown", function (e) {
    startX = e.clientX;
    dragged = false;
    stage.classList.add("is-dragging");
  });
  stage.addEventListener("pointermove", function (e) {
    if (startX === null) return;
    var dx = e.clientX - startX;
    if (Math.abs(dx) >= 70) {
      go(dx < 0 ? 1 : -1);
      startX = e.clientX;
      dragged = true;
    }
  });
  function endDrag() {
    startX = null;
    stage.classList.remove("is-dragging");
  }
  stage.addEventListener("pointerup", endDrag);
  stage.addEventListener("pointercancel", endDrag);
  stage.addEventListener("pointerleave", endDrag);
  stage.addEventListener("click", function (e) {
    if (dragged) { e.preventDefault(); dragged = false; }
  }, true);

  render();
})();
