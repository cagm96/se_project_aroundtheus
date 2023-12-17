import Popup from "./Popup.js";
export default class PopupQuestion extends Popup {
  constructor(popupElement, handleButtonClick, apiDeleteCardMethod) {
    super(popupElement);
    this._handleButtonClick = handleButtonClick;
    this._answerButton = this._popupElement.querySelector(".modal__button");
    this._apiDeleteCardMethod = apiDeleteCardMethod;
  }

  buttonClick(id) {
    this._apiDeleteCardMethod(id);
  }

  setEventListeners() {
    this._answerButton.addEventListeners("click", (evt) => {
      evt.preventDefault();
      this.buttonClick();
    });
  }
}
