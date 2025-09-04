const heading = document.querySelector("#main-heading");
const button = document.querySelector("#change-btn");

button.addEventListener("click", () => {
  heading.textContent = "You clicked the button!";
});
