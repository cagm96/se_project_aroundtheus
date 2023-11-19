import Popup from "./Popup.js";

//It accepts two arguments: the popup selector and a callback function,
//which PopupWithForm calls when the form’s submit event fires.
// Create an instance of the PopupWithForm class for each popup
// that contains a form, and call their setEventListeners() metho
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._submitButton = this._popupSelector.querySelector(".modal__button");
  }
  test() {
    console.log(this._submitButton);
  }

  // collects data from all the input fields and returns it as an object.
  // This data should then be passed to the submission handler as an argument.
  _getInputValues() {
    const inputList = [...this._popupSelector.querySelectorAll("input")];

    const inputValues = {};

    for (const input of inputList) {
      inputValues[input.name] = input.value;
    }

    console.log(inputValues);
    return inputValues;
  }

  // It overrides the setEventListeners() parent method.
  // The setEventListeners() method of the PopupWithForm class should add a
  // submit event listener to the form and call the setEventListeners() method of the parent class.
  setEventListeners() {
    this._submitButton.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const values = this._getInputValues();
      this._handleFormSubmit(values);
      evt.target.reset();
    });
    super.setEventListeners();
  }
}
