/* sweetScroll load */
document.addEventListener("DOMContentLoaded", function () {
  const sweetScroll = new SweetScroll({/* some options */ });

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load("particles-js", "assets/particlesjs-config.json", null);
  /* particlesJS.load("particles-js-nav", "assets/particlesjs-config.json", null);
  particlesJS.load("particledrop", "assets/particlesjs-config.json", null); */

}, false);

const checkboxmenu = document.querySelector('#checkbox_toggle');
document.querySelectorAll('.menu a').forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    console.log('Menu item clicked'); // Add this line
    checkboxmenu.checked = false;
  });
});

