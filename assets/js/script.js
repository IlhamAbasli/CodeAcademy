"use strict";

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//#region search

const searchBtn = document.querySelector("#header-top .search i");
const searchArea = document.querySelector(".search-area");
const searchInput = document.querySelector(".search-area .search-input");
const searchClose = document.querySelector(".search-area .search-input i");

searchBtn.addEventListener("click",function(){
  searchArea.classList.add("active");
  searchInput.classList.remove("passive");
})


searchClose.addEventListener("click", function(){
  searchArea.classList.remove("active");
  searchInput.classList.add("passive");
})

//#endregion



//#region drop-down


const openDropBtn = document.querySelector("#header-top .drop-menu .open");
const closeDropBtn = document.querySelector("#header-top .drop-menu .close");
const subDropMenu = document.querySelector("#header-top .sub-drop-menu");

openDropBtn.addEventListener("click",function(){
  openDropBtn.classList.add("d-none");
  closeDropBtn.classList.remove("d-none");
  subDropMenu.classList.add("active-drop");
  subDropMenu.classList.remove("passive-drop");
})


closeDropBtn.addEventListener("click",function(){
  openDropBtn.classList.remove("d-none");
  closeDropBtn.classList.add("d-none");
  subDropMenu.classList.remove("active-drop");
  subDropMenu.classList.add("passive-drop");
})

//#endregion


















