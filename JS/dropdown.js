const dropdown = document.querySelector(".dropdown");
let dropdownDown = false;
const dropdownCont = document.querySelector("#ddCategories");
const ddAbout = document.querySelector(".ddAbout");
const ddShop = document.querySelector(".ddShop");

document
  .querySelector("#navShop")
  .addEventListener("mouseenter", dropdownEnter);
document
  .querySelector("#navShop")
  .addEventListener("mouseleave", dropdownLeave);

function dropdownEnter() {
  if (dropdownDown == true) {
    console.log("I am connected");
    dropdown.classList.add("hidden");
    dropdownCont.classList.remove("dropdShop");

    dropdownDown = false;
  } else {
    dropdown.classList.remove("hidden");
    ddAbout.classList.add("hidden");

    dropdownCont.classList.add("dropdShop");

    dropdownDown = true;
  }
}

function dropdownLeave() {
  if (dropdownDown == true) {
    console.log("I am connected");
    dropdown.classList.add("hidden");
    dropdownDown = false;
  } else {
    dropdown.classList.remove("hidden");
    dropdownDown = true;
  }
}
