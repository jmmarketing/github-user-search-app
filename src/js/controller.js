const modeToggle = document.querySelector("#mode-toggle");
const bodyElement = document.querySelector("body");

const state = {
  mode: "light",
};

modeToggle.addEventListener("click", function () {
  console.log("Light/Dark Mode Toggle!");
  console.log(bodyElement);

  //
  if (!bodyElement.dataset.theme) {
    bodyElement.dataset.theme = "dark";
    modeToggle.dataset.theme = "dark";
    state.mode = "dark";
  } else {
    delete bodyElement.dataset.theme;
    delete modeToggle.dataset.theme;
    state.mode = "light";
  }

  updateModeToggleElement();
});

function updateModeToggleElement() {
  console.log(state.mode);
}
