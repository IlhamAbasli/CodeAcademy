"use strict";
//#region slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

//#endregion


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


//#region accordion
var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl)
})

//#endregion


//#region counter

let count1 = document.querySelector("#report .datas .col-12:nth-child(1) h2");
let count2 = document.querySelector("#report .datas .col-12:nth-child(2) h2");
let count3 = document.querySelector("#report .datas .col-12:nth-child(3) h2");
let count4 = document.querySelector("#report .datas .col-12:nth-child(4) h2");

function animateValue(item, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = item
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

function animateValue1(item, start, end, duration) {
  if (start === end) return;
  var range = end - start;
  var current = start;
  var increment = end > start? 20 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = item
  var timer = setInterval(function() {
      current += increment;
      obj.innerHTML = current;
      if (current == end) {
          clearInterval(timer);
      }
  }, stepTime);
}

animateValue1(count1, 0, 3000, 2000);
animateValue(count2, 0, 427, 1000);
animateValue(count3, 0, 95, 1000);
animateValue(count4, 0, 43, 1000);







//#endregion



