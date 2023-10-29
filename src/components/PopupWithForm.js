import Popup from "./Popup.js";

//It accepts two arguments: the popup selector and a callback function,
//which PopupWithForm calls when the form’s submit event fires.
// Create an instance of the PopupWithForm class for each popup
// that contains a form, and call their setEventListeners() metho
class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".popup_form");
    this._handleFormSubmit = handleFormSubmit;
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  // which collects data from all the input fields and returns it as an object.
  // This data should then be passed to the submission handler as an argument.
  _getInputValues() {}

  // It overrides the setEventListeners() parent method.
  // The setEventListeners() method of the PopupWithForm class should add a
  // submit event listener to the form and call the setEventListeners() method of the parent class.
  setEventListeners() {}
}
