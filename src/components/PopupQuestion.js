import Popup from "./Popup.js";
export default class PopupQuestion extends Popup {
  constructor(popupElement) {
    super(popupElement);
    //this._handleButtonClick = handleButtonClick;
    this._answerButton = this._popupElement.querySelector(".modal__button");

    this._form = this._popupElement.querySelector(".modal__form");
  }

  setSubmitAction(fn) {
    this._handleFormSubmit = fn;
  }

  setEventListeners() {
    this._answerButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
      this.close();
    });
    super.setEventListeners();
  }
}
