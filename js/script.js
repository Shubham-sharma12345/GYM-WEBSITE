let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};


var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        600:{
            slidesPerView:2,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
    },
});

// .......................................

const showmore = document.getElementById('showmore1')
const b1 = document.getElementById('b1')
b1.onclick = function() {show1()}
function show1(){
    if (showmore.style.display === "none") {
        showmore.style.display = "block"
        b1.innerHTML = "read less"
    } else {
        showmore.style.display = "none"
        b1.innerHTML = "read more"   
    }
}



const showmore2 = document.getElementById('showmore2')
const b2 = document.getElementById('b2')
b2.onclick = function() {show2()}
function show2(){
    if (showmore2.style.display === "none") {
        showmore2.style.display = "block"
        b2.innerHTML = "read less"
    } else {
        showmore2.style.display = "none"
        b2.innerHTML = "read more"   
    }
}
const showmore3 = document.getElementById('showmore3')
const b3 = document.getElementById('b3')
b3.onclick = function() {show3()}
function show3(){
    if (showmore3.style.display === "none") {
        showmore3.style.display = "block"
        b3.innerHTML = "read less"
    } else {
        showmore3.style.display = "none"
        b3.innerHTML = "read more"   
    }
}

