import Popup from "./Popup.js";

//It accepts two arguments: the popup selector and a callback function,
//which PopupWithForm calls when the form’s submit event fires.
// Create an instance of the PopupWithForm class for each popup
// that contains a form, and call their setEventListeners() metho
export default class PopupWithForm extends Popup {
  constructor(popupElement, handleFormSubmit) {
    super(popupElement);
    this._handleFormSubmit = handleFormSubmit;
    this._submitButton = this._popupElement.querySelector(".modal__button");
    this._form = this._popupElement.querySelector(".modal__form");
  }

  test() {
    console.log(this._submitButton);
  }

  // collects data from all the input fields and returns it as an object.
  // This data should then be passed to the submission handler as an argument.
  _getInputValues() {
    const inputList = [...this._popupElement.querySelectorAll("input")];

    const inputValues = {};

    for (const input of inputList) {
      inputValues[input.name] = input.value;
    }

    return inputValues;
  }
  close() {
    super.close();

    this._form.reset();
  }

  // It overrides the setEventListeners() parent method.
  // The setEventListeners() method of the PopupWithForm class should add a
  // submit event listener to the form and call the setEventListeners() method of the parent class.
  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const values = this._getInputValues();

      this._handleFormSubmit(values, this._submitButton, this.close());
    });
    super.setEventListeners();
  }
}
