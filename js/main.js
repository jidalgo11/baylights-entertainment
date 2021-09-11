const header = document.querySelector('header')
const hero = document.querySelector('.hero')

// $(window).scroll(function () {
//   var intro = $('.intro').innerHeight();
//   if ($(this).scrollTop() > intro + 50) {
//     $('header').addClass('sticky');
//   } else {
//     $('header').removeClass('sticky');
//   }
// });

window.addEventListener('scroll', () => {
  if(window.scrollY > 100) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky")
  }
})