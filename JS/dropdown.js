const dropdown = document.querySelector(".dropdown");
let dropdownDown = false;
const dropdownCont = document.querySelector("#ddCategories");
const ddAbout = document.querySelector(".ddAbout");
var ddShop = document.getElementsByClassName("ddShop");

document
  .querySelector("#navShop")
  .addEventListener("mouseenter", dropdownEnter);
document
  .querySelector("#navShop")
  .addEventListener("mouseleave", dropdownLeave);

function dropdownEnter() {
  dropdown.classList.remove("hidden");
  document.querySelector("#firstUl").classList.remove("hidden");
  document.querySelector("#secondUl").classList.remove("hidden");
  document.querySelector("#thirdUl").classList.remove("hidden");
  dropdownCont.classList.add("dropdShop");
}

function dropdownLeave() {
  console.log("I am connected");
  dropdown.classList.add("hidden");
  dropdownCont.classList.remove("dropdShop");
  document.querySelector("#firstUl").classList.add("hidden");
  document.querySelector("#secondUl").classList.add("hidden");
  document.querySelector("#thirdUl").classList.add("hidden");
}

document
  .querySelector("#navAboutus")
  .addEventListener("mouseenter", dropdownEnterA);
document
  .querySelector("#navAboutus")
  .addEventListener("mouseleave", dropdownLeaveA);

function dropdownEnterA() {
  dropdown.classList.remove("hidden");
  document.querySelector(".ddAbout").classList.remove("hidden");
  dropdownCont.classList.add("dropdAbout");
}

function dropdownLeaveA() {
  console.log("I am connected");
  dropdown.classList.add("hidden");
  dropdownCont.classList.remove("dropdAbout");
  document.querySelector(".ddAbout").classList.add("hidden");
}
