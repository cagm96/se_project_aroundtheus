//---------------Elements
export const cardTemplate = document.querySelector("#card-template");
export const profileEditButton = document.querySelector("#profile-edit-button");
export const profileEditForm = document.forms["modal__form"];

export const profileNameInput = profileEditForm.querySelector(
  "#profile-title-input"
);
export const profileJobInput = profileEditForm.querySelector(
  "#profile-description-Input"
);
//cards add modal
export const cardListEl = document.querySelector(".cards__list");
export const addNewCardButton = document.querySelector(".profile__add-button");
export const cardAddModal = document.querySelector("#add-card-modal");
export const addCardFormElement = cardAddModal.querySelector(".modal__form");

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

export const profileAvatarModal = document.querySelector(
  "#profile-avatar-modal"
);
export const profileImage = document.querySelector(".profile__image");
export const profileAvatarModalForm =
  profileAvatarModal.querySelector(".modal__form");

export * from "../utils/constants.js";
