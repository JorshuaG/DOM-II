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

const navBar = document.querySelector("header");

navBar.addEventListener("dblclick", function () {
  if (navBar.style.backgroundColor === "white") {
    navBar.style.backgroundColor = "#fff300";
  } else {
    navBar.style.backgroundColor = "white";
  }
});

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 100) {
    event.target.style.backgroundColor = "orange";
  } else {
    event.target.style.backgroundColor = "";
  }
});

const firstImg = document.querySelector(".intro img");

firstImg.addEventListener("wheel", function () {
  firstImg.display = "none";
});
