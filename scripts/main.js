let button = document.querySelector('.button');
window.onscroll = function() {
    let scrolled = document.documentElement.scrollTop;
    if(scrolled > 1000) {
        button.classList.add('visible');
      } else {
        button.classList.remove('visible');
      }
}
button.addEventListener('click', backToTop);

function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -50);
        setTimeout(backToTop, 0);
    }
}