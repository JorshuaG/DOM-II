// Your code goes here
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (nav) {
  nav.addEventListener("mouseover", function (mouseEvent) {
    mouseEvent.target.style.color = "red";
    console.log(mouseEvent);
  });
  nav.addEventListener("mouseout", function () {
    nav.style.color = "";
  });
});

// .addEventListener("mouseover", function () {
//   navLinks.style.color = "red";
// });
// nav.addEventListener("mouseout", function () {
//   navLinks.style.color = "";
// });

const letsGoClick = document.querySelector(".text-content:nth-of-type(1) h2");
const adventureClick = document.querySelector(
  ".text-content:nth-of-type(2) h2"
);

letsGoClick.addEventListener("click", function () {
  document.querySelector(".text-content:nth-of-type(2) h2").scrollIntoView();
});

adventureClick.addEventListener("click", function () {
  document.querySelector(".content-destination h2").scrollIntoView();
});

const pageImgs = document.querySelector("img");

window.addEventListener("load", function () {
  pageImgs.addEventListener().fadeIn("slow", "Swing");
});
