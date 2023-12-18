import Popup from "./Popup.js";
export default class PopupQuestion extends Popup {
  constructor(popupElement, handleButtonClick, apiDeleteCardMethod) {
    super(popupElement);
    this._handleButtonClick = handleButtonClick;
    this._answerButton = this._popupElement.querySelector(".modal__button");
    this._apiDeleteCardMethod = apiDeleteCardMethod;
  }

  setEventListeners(id) {
    this._answerButton.addEventListeners("click", (evt) => {
      evt.preventDefault();
      this.popupElement.cla;

      this._apiDeleteCardMethod(id);
    });
  }
}
