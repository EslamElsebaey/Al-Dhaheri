
$(document).ready(function(){

  // preloader

setTimeout(()=>{
  $("#preloader img").css("opacity" , "0")
} , 700)
setTimeout(() => {
  $("#preloader").css({
    opacity : "0" , 
    visibility : "hidden" ,
  })
  $("body").css("overflow" , "visible");
}, 1500);

/************************************************************************ */



// blog swiper
const swiper2 = new Swiper(' .news .mySwiper', {
  loop: true,
  // autoplay: true,
 
  pagination: {
    el: '.news .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.news .swiper-button-next ',
    prevEl: '.news .swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    350: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
      spaceBetween : 30 ,
    },
  }
});

/************************************************************************ */


// counters

let experience = parseInt(document.querySelector(".exp").innerHTML);
let clients = parseInt(document.querySelector(".clients").innerHTML);


let counter = setInterval(() => {
  experience = experience+1  ; 
  document.querySelector(".exp").innerHTML =  "+" + experience
   if(experience == 15) {
     clearInterval(counter)
   }
 },500);
 

let counter2 = setInterval(() => {
  clients = clients+1  ; 
  document.querySelector(".clients").innerHTML =  "+" + clients
   if(clients == 2000) {
     clearInterval(counter2)
   }
 }, 3);
 

/************************************************************************ */

//  wow animation
new WOW().init();

/************************************************************************ */

// to top button
$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
  }
})

$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, '1000');
}) 

/************************************************************************ */

// main swiper

const mainSwiper = new Swiper('.mainBanner .mainSwiper', {
  loop: true,
  draggable: true,
  autoplay: true,
  navigation: {
    nextEl: ' .mainBanner .swiper-button-next',
    prevEl: '.mainBanner .swiper-button-prev',
  },

  pagination: {
    el: '.mainBanner .swiper-pagination',
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  }
});

/************************************************************************ */



// open and close sideBar

$(".openNav-btn").click(function(){
  $("nav").removeClass("open-nav");
  $("body").css("overflow" , "hidden") ;
})
$(".closeNav-btn").click(function(){
  $("nav").addClass("open-nav");
  $("body").css("overflow" , "visible") ;
})

/************************************************************************ */
 

// nested menus

if($(window).width() <= 768) {
  $("footer h4").click(function(){
    $(this).next().slideToggle(400);
    $(this).toggleClass("arrow-rotate");
  })
  
$(".li-drop").click(function (e) {
  e.preventDefault() ;
  $(".ul-drop").slideToggle(300) ;
  $(this).children().toggleClass("icon-rotate");
  })
}

})
















  

