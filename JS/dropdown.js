const dropdown = document.querySelector(".dropdown");
let dropdownDown = false;
const dropdownCont = document.querySelector("#ddCategories");
const ddAbout = document.querySelector(".ddAbout");
var ddShop = document.getElementsByClassName("ddShop");

document
  .querySelector("#navShop")
  .addEventListener("mouseenter", dropdownEnterS);

document
  .querySelector("#liShop")
  .addEventListener("mouseenter", dropdownEnterS);

function dropdownEnterS() {
  console.log("I do work");
  //Show dropdown
  dropdown.classList.remove("hidden");
  //Hide everything else
  dropdownCont.classList.remove("dropdAbout");
  document.querySelector(".ddAbout").classList.add("hidden");
  //remove yellow from rest
  document.querySelector("#liAboutus").style.color = "white";
  document.querySelector("#liAboutus").style.fontWeight = "normal";
  document.querySelector("#liSale").style.color = "white";
  document.querySelector("#liSale").style.fontWeight = "normal";
  document.querySelector("#liNA").style.color = "white";
  document.querySelector("#liNA").style.fontWeight = "normal";
  //Show the related stuff
  document.querySelector("#firstUl").classList.remove("hidden");
  document.querySelector("#secondUl").classList.remove("hidden");
  document.querySelector("#thirdUl").classList.remove("hidden");
  //Add related class (for correct layout)
  dropdownCont.classList.add("dropdShop");
  //Make the heading yellow
  document.querySelector("#liShop").style.color = "#EEEE9E";
  document.querySelector("#liShop").style.fontWeight = "bold";
}

document.querySelector("#liNA").addEventListener("mouseenter", dropdownEnterNA);

function dropdownEnterNA() {
  console.log("I do work");
  //Show dropdown
  dropdown.classList.remove("hidden");
  //Hide everything else
  dropdownCont.classList.remove("dropdAbout");
  document.querySelector(".ddAbout").classList.add("hidden");
  document.querySelector("#firstUl").classList.add("hidden");
  document.querySelector("#secondUl").classList.add("hidden");
  document.querySelector("#thirdUl").classList.add("hidden");
  //remove yellow from rest
  document.querySelector("#liAboutus").style.color = "white";
  document.querySelector("#liAboutus").style.fontWeight = "normal";
  document.querySelector("#liShop").style.color = "white";
  document.querySelector("#liShop").style.fontWeight = "normal";
  document.querySelector("#liSale").style.color = "white";
  document.querySelector("#liSale").style.fontWeight = "normal";

  //Show the related stuff
  //Add related class (for correct layout)
  //Make the heading yellow
  document.querySelector("#liNA").style.color = "#EEEE9E";
  document.querySelector("#liNA").style.fontWeight = "bold";
}

document
  .querySelector("#liSale")
  .addEventListener("mouseenter", dropdownEnterSale);

function dropdownEnterSale() {
  console.log("I do work");
  //Show dropdown
  dropdown.classList.remove("hidden");
  //Hide everything else
  dropdownCont.classList.remove("dropdAbout");
  document.querySelector(".ddAbout").classList.add("hidden");
  document.querySelector("#firstUl").classList.add("hidden");
  document.querySelector("#secondUl").classList.add("hidden");
  document.querySelector("#thirdUl").classList.add("hidden");
  //remove yellow from rest
  document.querySelector("#liAboutus").style.color = "white";
  document.querySelector("#liAboutus").style.fontWeight = "normal";
  document.querySelector("#liShop").style.color = "white";
  document.querySelector("#liShop").style.fontWeight = "normal";
  document.querySelector("#liNA").style.color = "white";
  document.querySelector("#liNA").style.fontWeight = "normal";
  //Show the related stuff
  //Add related class (for correct layout)
  //Make the heading yellow
  document.querySelector("#liSale").style.color = "#EEEE9E";
  document.querySelector("#liSale").style.fontWeight = "bold";
}

document
  .querySelector("#navAboutus")
  .addEventListener("mouseenter", dropdownEnterA);

document
  .querySelector("#liAboutus")
  .addEventListener("mouseenter", dropdownEnterA);

function dropdownEnterA() {
  //Show dropdown
  dropdown.classList.remove("hidden");
  //Hide everything else
  document.querySelector("#firstUl").classList.add("hidden");
  document.querySelector("#secondUl").classList.add("hidden");
  document.querySelector("#thirdUl").classList.add("hidden");
  //remove yellow from rest
  document.querySelector("#liShop").style.color = "white";
  document.querySelector("#liShop").style.fontWeight = "normal";
  document.querySelector("#liNA").style.color = "white";
  document.querySelector("#liNA").style.fontWeight = "normal";
  document.querySelector("#liSale").style.color = "white";
  document.querySelector("#liSale").style.fontWeight = "normal";
  //Show the related stuff
  document.querySelector(".ddAbout").classList.remove("hidden");
  //Add related class (for correct layout)
  dropdownCont.classList.add("dropdAbout");
  //Add yellow
  document.querySelector("#liAboutus").style.color = "#EEEE9E";
  document.querySelector("#liAboutus").style.fontWeight = "bold";
}

document
  .querySelector(".dropdown")
  .addEventListener("mouseleave", dropdownLeave);

function dropdownLeave() {
  console.log("I am connected");
  dropdown.classList.add("hidden");
}
