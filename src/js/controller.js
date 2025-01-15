const modeToggle = document.querySelector("#mode-toggle");
const bodyElement = document.querySelector("body");

modeToggle.addEventListener("click", function () {
  console.log("Light/Dark Mode Toggle!");
  console.log(bodyElement);

  if (!bodyElement.dataset.theme) bodyElement.dataset.theme = "dark";
  else delete bodyElement.dataset.theme;
});
