// handel btn dark mood
let mood = document.querySelector(".mood");
mood.onclick = function (e) {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    // document.querySelector(".lightMood").classList.add("active");
    // document.querySelector(".lightMood").style.display("none");
    document.querySelector(".mood").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FFD43B" d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>';
  } else {
    document.querySelector(".mood").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#FFD43B" d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>';
  }

  // handel dark theme
  if (!document.body.classList.contains("dark-theme")) {
    return localStorage.setItem("mood", "light");
  } else {
    localStorage.setItem("mood", "dark");
  }
};

// handel get theme mood
let getMood = localStorage.getItem("mood");
if (getMood === "dark") {
  document.body.classList.add("dark-theme");
}

// handel btn nav bar to active
let navBar = document.querySelector(".nav-bar");
let activeBtns = document.querySelectorAll(".activeBtn a");
activeBtns.forEach((activeBtn) => {
  activeBtn.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    activeBtn.classList.add("active");
  });
});

// handel btn nav bar to show menu
let btnNavBar = document.querySelector(".btn-nav-bar");
btnNavBar.addEventListener("click", () => {
  document.querySelector(".nav-bar").classList.toggle("show");
});

// // handel auto type
// let name = "Front-End Developer";
// var typed = new Typed(".auto-type", {
//   strings: ["faress"],
//   typeSpeed: 150,
//   backSpeed: 100,
//   loop: true,
// });

// handel send form data to Gmail

// handel secthion skills to make wight in span full
let scetion = document.querySelector(".skills");
let spans = document.querySelectorAll(".prog span");
window.onscroll = function () {
  if (window.scrollY >= scetion.offsetTop - 200) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

// handel btn img  language
import translations from "./translations.js";

const languageSelector = document.querySelector(".language-selector");
let languageAr = document.querySelector(".arbic-foto");
let languageEn = document.querySelector(".english-foto");
let cssRtl = document.querySelector(".cssRtl");

languageSelector.addEventListener("click", (event) => {
  location.reload();
  setLanguage(event.target.dataset.lan);
  localStorage.setItem("lang", event.target.dataset.lan);
  // console.log(event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  // const language = localStorage.getItem("lang");
  setLanguage(localStorage.getItem("lang"));
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = translations[language][translationKey];
  });
  if (language === "ar") {
    document.dir = "rtl";
    languageEn.classList.remove("d-none");
    languageAr.classList.add("d-none");
    cssRtl.href = "/css/bootstrap.minrtl.css";

    // // handel form  language
    document.querySelector("form input.name").placeholder = "اسمك";
    document.querySelector("form input.email").placeholder = "بريدك الالكتروني";
    document.querySelector("form input.number").placeholder = "رقمك";
    document.querySelector("form textarea.massege").placeholder = "رسالتك";
  } else {
    document.dir = "ltr";
    languageEn.classList.add("d-none");
    languageAr.classList.remove("d-none");
    cssRtl.href = "";

    // // handel form  language
    document.querySelector("form input.name").placeholder = "Your Name";
    document.querySelector("form input.email").placeholder = "Your Email";
    document.querySelector("form input.number").placeholder = "Your Number";
    document.querySelector("form textarea.massege").placeholder =
      "Your Massege";
  }
};
