import Popup from "./Popup.js";
export default class PopupQuestion extends Popup {
  constructor(popupElement, apiDeleteCardMethod) {
    super(popupElement);
    //this._handleButtonClick = handleButtonClick;
    this._answerButton = this._popupElement.querySelector(".modal__button");
    this._apiDeleteCardMethod = apiDeleteCardMethod;
    this._form = this._popupElement.querySelector(".modal__form");
  }

  test() {
    console.log(this._answerButton);
  }

  setEventListeners(id) {
    this._answerButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      console.log("it works");

      console.log(id);
      this._apiDeleteCardMethod(id);
      this.close();
    });
    super.setEventListeners();
  }
}
