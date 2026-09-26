document.addEventListener("DOMContentLoaded", function () {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const themeButton = document.querySelector("[data-theme-toggle]");
  const themeKey = "leslie-site-theme";
  const setTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    if (themeButton) themeButton.setAttribute("aria-pressed", String(theme === "dark"));
  };

  let savedTheme = null;
  try { savedTheme = window.localStorage.getItem(themeKey); } catch (_error) { /* Storage can be unavailable in private browsing. */ }
  setTheme(savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light");

  if (themeButton) {
    themeButton.addEventListener("click", function () {
      const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      setTheme(nextTheme);
      try { window.localStorage.setItem(themeKey, nextTheme); } catch (_error) { /* Current page still updates without storage. */ }
    });
  }

  if (prefersReducedMotion) {
    document.querySelectorAll("lottie-player").forEach((player) => player.removeAttribute("autoplay"));
  }
});
