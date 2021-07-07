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

letsGoClick.addEventListener("dblclick", function () {
  document.querySelector(".text-content:nth-of-type(2) h2").scrollIntoView();
});
letsGoClick.addEventListener("click", function () {
  letsGoClick.style.backgroundColor = "blue";
});

adventureClick.addEventListener("dblclick", function () {
  document.querySelector(".content-destination h2").scrollIntoView();
});
adventureClick.addEventListener("click", function () {
  adventureClick.style.backgroundColor = "green";
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

const welcomeHeader = document.querySelector("#welcomeMsg");
const destinationHeader = document.querySelector(".content-destination h2");

welcomeHeader.addEventListener("click", function () {
  welcomeHeader.style.backgroundColor = "purple";
});

welcomeHeader.addEventListener("dblclick", function () {
  welcomeHeader.style.backgroundColor = "";
});

destinationHeader.addEventListener("click", function () {
  destinationHeader.style.backgroundColor = "yellow";
});

destinationHeader.addEventListener("dblclick", function () {
  destinationHeader.style.backgroundColor = "";
});

const stopButton = document.querySelector("#stop");

stopButton.stopPropagation;
