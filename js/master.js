// handel btn nav bar to active
let navBar = document.querySelectorAll(".nav-bar");
let activeBtns = document.querySelectorAll(".activeBtn a");
activeBtns.forEach((activeBtn) => {
  activeBtn.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    activeBtn.classList.add("active");
  });
});

// handel btn nav bar to show
let btnNavBar = document.querySelector(".btn-nav-bar");
btnNavBar.addEventListener("click", () => {
  document.querySelector(".nav-bar").classList.toggle("show");
});

// // handel auto type
var typed = new Typed(".auto-type", {
  strings: ["front-End Developer"],
  typeSpeed: 150,
  backSpeed: 100,
  loop: true,
});

// handel send form data to Gmail

// handel secthion skills to make wight full
let scetion = document.querySelector(".skills");
let spans = document.querySelectorAll(".prog span");
window.onscroll = function () {
  if (window.scrollY >= scetion.offsetTop - 100) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};
