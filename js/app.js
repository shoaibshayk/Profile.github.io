$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots: '.slider-dots',
        dotsClass: 'dots',

    });


let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');
let navHome = document.querySelector('.nav-home');
let navAbout = document.querySelector('.nav-about');
let navService = document.querySelector('.nav-service');
let navWork = document.querySelector('.nav-work');
let navBlog = document.querySelector('.nav-blog');
let navContact = document.querySelector('.nav-contact');


hamberger.addEventListener('click', function(){
    mobileNav.classList.add('open')
});

times.addEventListener('click', function(){
    mobileNav.classList.remove('open')
});

navHome.addEventListener('click', function(){
    mobileNav.classList.remove('open')
});

navAbout.addEventListener('click', function(){
    mobileNav.classList.remove('open')
});

navService.addEventListener('click', function(){
    mobileNav.classList.remove('open')
});

navWork.addEventListener('click', function(){
    mobileNav.classList.remove('open')
});

navBlog.addEventListener('click', function(){
    mobileNav.classList.remove('open')
});

navContact.addEventListener('click', function(){
    mobileNav.classList.remove('open')
});


});

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});


