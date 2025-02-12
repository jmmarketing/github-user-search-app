class searchbarView {
  _errorMessage = document.querySelector(".search-bar__alert");
  _searchButton = document.querySelector(".search-bar__btn");
  _inputField = document.querySelector(".search-bar__input");

  addHandlerGetInput(handlerFunction) {
    this._searchButton.addEventListener("click", handlerFunction);
  }

  _displayError() {
    this._errorMessage.classList.remove("hide");
  }
  _clearError() {
    this._errorMessage.classList.add("hide");
  }

  _clearInput() {
    this._inputField.value = "";
    this._clearError();
  }

  getInput() {
    if (!this._inputField.value) {
      this._displayError();
      throw new Error("EMPTY SEARCH!");
    }

    const user = this._inputField.value;
    return user;
  }
}
export default new searchbarView();
