import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const cardTemplate = document.querySelector("#card-template");

//---------------Elements
//profile
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-Input"
);
const profileEditForm = document.forms["modal__form"];
//cards add modal

const cardListEl = document.querySelector(".cards__list");

const addNewCardButton = document.querySelector(".profile__add-button");
const cardAddModal = document.querySelector("#add-card-modal");

const addCardFormElement = cardAddModal.querySelector(".modal__form");
//cards input
const cardTitleInput = addCardFormElement.querySelector(
  ".modal__input_type_title"
);
const cardUrlInput = addCardFormElement.querySelector(".modal__input_type_url");

//image modal buttons

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const editFormValidator = new FormValidator(config, profileEditForm);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(config, addCardFormElement);
addFormValidator.enableValidation();

const popUpImageHandler = new PopupWithImage("#image-modal");
popUpImageHandler.setEventListeners();

//----------------functions

function renderCard(cardData, wrapper) {
  const card = new Card(cardData, cardTemplate, handleImageClick);

  wrapper.prepend(card.getView());
}

//----------------Event handlers
function handleProfileFormSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  e.target.reset();
  addFormValidator.toggleButtonState();
  renderCard(createCard({ name, link }), cardListEl);

  closePopup(cardAddModal);
}
function handleImageClick(name, link) {
  popUpImageHandler.open(name, link);
}
//----------------Event Listeners

profileEditForm.addEventListener("submit", handleProfileFormSubmit);
addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);

// open the modal profile
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopUp(profileEditModal);
});

const popupCardAddHandler = new PopupWithForm({
  popupElement: "#add-card-modal",
  handleFormSubmit: renderCard,
});

//card add button to open modal
addNewCardButton.addEventListener("click", () => {
  popupCardAddHandler.open(cardAddModal);
});

const modals = [...document.querySelectorAll(".modal")];

const initialCardSection = new Section(initialCards, renderCard, cardListEl);
initialCardSection.renderItems();
