/* sweetScroll load */
document.addEventListener("DOMContentLoaded", function () {
  const sweetScroll = new SweetScroll({/* some options */});

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load("particles-js", "assets/particlesjs-config.json",null);
  particlesJS.load("particles-js-nav", "assets/particlesjs-config.json",null);
  particlesJS.load("particledrop", "assets/particlesjs-config.json",null);

}, false);
