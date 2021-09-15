const header = document.querySelector('header')
const hero = document.querySelector('.hero')

$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    $('nav').removeClass('active');
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 750);
        return false;
      }
    }
  });
});

$('#top').click(function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, 750);
});

window.addEventListener('scroll', () => {
  if(window.scrollY > 100) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky")
  }
})