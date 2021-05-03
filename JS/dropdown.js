const dropdown = document.querySelector(".dropdown");
let dropdownDown = false;
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
    dropdownDown = false;
  } else {
    dropdown.classList.remove("hidden");
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
