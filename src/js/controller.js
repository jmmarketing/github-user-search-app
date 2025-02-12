import * as model from "./model.js";
import infobarView from "./views/infobarView.js";
import searchbarView from "./views/searchbarView.js";
import resultCardView from "./views/resultCardView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

// ##### FUNCTIONS ###########
const controlThemeToggle = function () {
  infobarView.changeTheme();
};

const controlUserSearch = async function () {
  try {
    const githubUser = searchbarView.getInput();

    await model.searchGithub(githubUser);
    resultCardView.renderUserData(model.data);
    searchbarView._clearInput();
  } catch (err) {
    console.log(err);
    searchbarView._displayError();
  }
};

function init() {
  infobarView.addHandlerToggle(controlThemeToggle);
  searchbarView.addHandlerGetInput(controlUserSearch);
}
init();
