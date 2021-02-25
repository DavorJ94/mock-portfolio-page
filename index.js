const toggleHamburger = document.querySelector(".myLinks");
const theIcon = document.querySelector(".icon");

theIcon.addEventListener("click", () => {
  if (toggleHamburger.style.display === "block") {
    toggleHamburger.style.display = "none";
  } else {
    toggleHamburger.style.display = "block";
    console.log("hey");
  }
});
