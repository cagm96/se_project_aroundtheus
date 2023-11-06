import Popup from "./Popup.js";

//It accepts two arguments: the popup selector and a callback function,
//which PopupWithForm calls when the form’s submit event fires.
// Create an instance of the PopupWithForm class for each popup
// that contains a form, and call their setEventListeners() metho
export default class PopupWithForm extends Popup {
  constructor({ popupElement, handleFormSubmit }) {
    super({ popupElement });
    this._popupForm = super._popupElement.querySelector(".modal_form");
    this._handleFormSubmit = handleFormSubmit;
    this._cardTitleInput = this._popupForm.querySelector(
      ".modal__input_type_title"
    );
    this._cardUrlInput = this._popupForm.querySelector(
      ".modal__input_type_url"
    );
    this._submitButton = this._popupForm.querySelector("#modal__card-button");
  }
  test() {
    console.log(this._popupForm);
  }
  close() {
    this._popupForm.reset();
    super.close();
  }

  // collects data from all the input fields and returns it as an object.
  // This data should then be passed to the submission handler as an argument.
  _getInputValues() {
    const name = this._cardTitleInput.value;
    const link = this._cardUrlInput.value;
    return { name, link };
  }

  // It overrides the setEventListeners() parent method.
  // The setEventListeners() method of the PopupWithForm class should add a
  // submit event listener to the form and call the setEventListeners() method of the parent class.
  setEventListeners(e) {
    e.preventDefault();
    this._submitButton.addEventListener("submit", () => {
      this._getInputValues();
      this.close();
    });
    e.target.reset();
  }
}
