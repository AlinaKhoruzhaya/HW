"use strict";

//slider1
const HEADER_SLIDER = new Swiper('.header_slider', {

  direction: 'vertical',
  loop: true,


  //pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

//slider2
const NEWS_SLIDER = new Swiper('.news_slider', {
  direction: 'horizontal',
  loop: true,
  loopedSlides: 2,
  slidesPerView: 2,
  spaceBetween: 2,

  //pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    disabledClass: 'swiper-button-disabled',
    navigation: true,
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 2
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1500: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  autoplay: {
    delay: 1000
  }
});

//scroll
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

//gallery
Fancybox.bind('[data-fancybox="gallery"]', {
});

//map
let marker;

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    mapId: "5172ae3547b4cfcc",
    center: { lat: 40.675315, lng: -73.869069 },
  });
  const image = "../images/Pin.png";

  marker = new google.maps.Marker({
    map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    icon: image,
    position: { lat: 40.675315, lng: -73.869069 },
  });
  marker.addListener("click", toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

window.initMap = initMap;

//bg scroll header sticky
let header = document.querySelector('.header_wrapper'); // Здесь класс вашей шапки

window.addEventListener('scroll', function () {
  if (window.scrollY >= 54) {
    header.classList.add('header__sticky'); // Добавить класс, который будет менять стили
  } else {
    header.classList.remove('header__sticky'); // Убрать
  }
});

//active menu
const sections = document.querySelectorAll(".activ_link_scroll");
const navLi = document.querySelectorAll(".header_wrapper .menu li a");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
};

//form clearing when updating
$('#form_id')[0].reset();

//gamburger menu
const menu = document.querySelector(".menu2");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
  function (menuItem) {
    menuItem.addEventListener("click", toggleMenu);
  }
)
