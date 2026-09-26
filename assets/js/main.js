document.addEventListener("DOMContentLoaded", function () {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!prefersReducedMotion && window.particlesJS && document.getElementById("particles-js")) {
    particlesJS.load("particles-js", "/assets/particlesjs-config.json", null);
  }
});

