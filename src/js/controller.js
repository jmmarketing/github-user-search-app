import * as model from "./model.js";
import infobarView from "./views/infobarView.js";
import searchbarView from "./views/searchbarView.js";
import resultCardView from "./views/resultCardView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

// ######### EVENT LISTENERS ############
// modeToggle.addEventListener("click", changeTheme);

// searchButton.addEventListener("click", (e) => {
//   if (!inputField.value) {
//     displayError();
//     throw new Error("EMPTY SEARCH!");
//   }

//   searchGithub(inputField.value);
// });
// ##### FUNCTIONS ###########
const controlThemeToggle = function () {
  infobarView.changeTheme();
};

function init() {}
infobarView.addHandlerToggle(controlThemeToggle);
init();
