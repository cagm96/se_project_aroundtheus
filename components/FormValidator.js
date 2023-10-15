export default class FormValidator {
  constructor(setting, formEl) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = setting.submitButton;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._form = formEl;
  }
  //PRIVATE checking the fields validity

  //PRIVATE changing the state of the Submit button

  //PRIVATE Adding all the needed handlers.

  //PUBLIC method enableValidation(), which enables form validation.
  _showInputError(inputEl, errorMessage) {
    const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(this._inputErrorClass);
    errorMessageEl.textContent = errorMessage;
    errorMessageEl.classList.add(this._errorClass);
  }

  _hideInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(inputErrorClass);
    errorMessageEl.textContent = "";
    errorMessageEl.classList.remove(errorClass);
  }
  _toggleButtonState(inputEls, submitButton, { inactiveButtonClass }) {
    if (hasInvalidInput(inputEls)) {
      submitButton.classList.add(inactiveButtonClass);
      submitButton.disabled = true;
      return;
    }
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.disabled = false;
  }

  _hasInvalidInput() {}
  _setEventListener() {
    const inputList = Array.form(
      this.form.querySelectorAll(this._inputSelector)
    );
    const buttonElement = this.form.querySelector(this._submitButtonSelector);

    inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        checkInputValidity(formEl, inputEl, options);
        toggleButtonState(inputEls, submitButton, options);
      });
    });
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    setEventListeners(formEl, config);
  }

  //public method to either disable the state of the button or reset form validation (including the state of the submit button).
  //    1. the submission button for all forms should be disabled whenever one or more form fields are invalid.
  //    2. after successfully submitting the card form, the form fields should be cleared and the submit button should be disabled.
  //       this should only be done after successful submission.

  //       NOTE
  //       When the form is closed, but not submitted, it provides a better user experience to leave the form fields as they are, so as to prevent lost data.
  //       Note that for the edit profile modal, the button must be disabled after submission. When the user opens the modal again, it will already be filled with valid input values.
}
