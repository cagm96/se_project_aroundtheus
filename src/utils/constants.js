import FormValidator from "../components/FormValidator.js"; //---------------Elements
export const cardTemplate = document.querySelector("#card-template");
export const profileEditButton = document.querySelector("#profile-edit-button");
export const profileEditForm = document.forms["profile-form"];
export const profileAvatarModalForm = document.forms["avatar-form"];
export const profileNameInput = profileEditForm.querySelector(
  "#profile-title-input"
);
export const profileJobInput = profileEditForm.querySelector(
  "#profile-description-Input"
);
//cards add modal
export const cardListEl = document.querySelector(".cards__list");
export const addNewCardButton = document.querySelector(".profile__add-button");
export const addCardFormElement = document.forms["add-card-form"];

//image modal buttons
export const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};
export const profileButton = document.querySelector(".profile__button");

export * from "../utils/constants.js";

//You can universally create instances of validators for all forms in the
//project storing them inside one object formValidators.
//And then you can take any validator using attribute name of the
//form where you need to disable/enable the submit button or remove errors.

// const formValidators = {};

// // enable validation
// const enableValidation = (config) => {
//   const formList = Array.from(document.querySelectorAll(config.formSelector));
//   formList.forEach((formElement) => {
//     const validator = new FormValidator(config, formElement);
//     // here you get the name of the form
//     const formName = formElement.getAttribute("name");

//     // here you store a validator by the `name` of the form
//     formValidators[formName] = validator;
//     validator.enableValidation();
//   });
// };

// enableValidation(config);

// formValidators[profileForm.getAttribute("name")].resetValidation();

// or you can use a string – the name of the form (you know it from `index.html`)
