// TYPEWRITER ANIMATION IN HERO DIV

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 250;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".typewriteText");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

// DISABLE SCROLL IN NAVBAR OVERLAY AND ENABLE ON CLICKING ANCHOR TAGS IN NAVBAR

const navbtn = document.querySelector(".menu-btn");
const about = document.querySelector(".about");
const skills = document.querySelector(".skills");
const work = document.querySelector(".work");
const contact = document.querySelector(".contact");
let Interval;

function disableScroll() {
  document.body.classList.add("stop-scrolling");
}

function enableScroll() {
  document.body.classList.remove("stop-scrolling");
}

navbtn.addEventListener("click", function () {
  about.addEventListener("click", function () {
    navbtn.click();
    clearInterval(Interval);
    Interval = undefined;
    enableScroll();
  });
  skills.addEventListener("click", function () {
    navbtn.click();
    clearInterval(Interval);
    Interval = undefined;
    enableScroll();
  });
  work.addEventListener("click", function () {
    navbtn.click();
    clearInterval(Interval);
    Interval = undefined;
    enableScroll();
  });
  contact.addEventListener("click", function () {
    navbtn.click();
    clearInterval(Interval);
    Interval = undefined;
    enableScroll();
  });
  if (Interval) {
    clearInterval(Interval);
    Interval = undefined;
    enableScroll();
  } else Interval = setInterval(disableScroll(), 100);
});

// PARALLAX EFFECT ON SCROLLING

const nameTitle = document.querySelector(".name");
const header = document.querySelector(".intro-text");
let header_height = header.offsetHeight;
console.log(header_height);
const translateY = document.querySelectorAll(".translateY");

//Y axis Translation
window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;
  // console.log(scroll)
  translateY.forEach((element) => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  });
});

//X axis Translation
const translateX = document.querySelectorAll(".translateX");

window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;
  // console.log(scroll)
  translateX.forEach((element) => {
    let speed = element.dataset.speed;
    element.style.transform = `translateX(${scroll * speed}px)`;
  });
  nameTitle.style.opacity = -scroll / (header_height / 2) + 1.5;
});


// ANIMATED SKILL GRAPH

