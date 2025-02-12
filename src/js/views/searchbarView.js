class searchbarView {
  _errorMessage = document.querySelector(".search-bar__alert");
  _searchButton = document.querySelector(".search-bar__btn");
  _inputField = document.querySelector(".search-bar__input");

  _displayError() {
    this._errorMessage.classList.remove("hide");
  }
  _clearError() {
    this._errorMessage.classList.add("hide");
  }

  _clearInput() {
    this._inputField.value = "";
  }

  getInput() {
    if (!inputField.value) {
      this._displayError();
      throw new Error("EMPTY SEARCH!");
    }

    return this._inputField.value;
  }
}

export default new searchbarView();
