const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
}
document.addEventListener('DOMContentLoaded', function () {
  jQuery('.ba-menu-backdrop, .close-menu i').on('mousedown', function () {
    let $this = this.closest('.ba-item').querySelector('.main-menu');
    $this.classList.add('visible-menu-out');
    setTimeout(function () {
      $this.classList.remove('visible-menu-out');
    }, 750);
  });
});
