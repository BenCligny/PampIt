/*  let loader;
function loadNow(opacity) {
  if(opacity <= 0) {
    displayContent();
  } else {
    loader.style.opacity = opacity;
    window.setTimeout(function() {
      loadNow(opacity - 0.05)
    }, 100);
  }
}
function displayContent() {
  loader.style.display = 'none';
  document.getElementById('content').style.display = 'block';
}
document.addEventListener("DOMContentLoaded", function() {
  loader = document.getElementById('loader');
  loadNow(1);
});  */

window.addEventListener('load', () => {
  const preload = document.querySelector('#loader');
  preload.classList.add('preload-finish');
})

const content = document.querySelector('#content');
content.classList.add('cacher');
window.addEventListener('load', () => {
  content.classList.remove('cacher');
})