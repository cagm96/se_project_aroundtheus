import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import "../pages/index.css";

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
//---------------Elements
const cardTemplate = document.querySelector("#card-template");
//profile
const profileEditButton = document.querySelector("#profile-edit-button");

const profileEditForm = document.forms["modal__form"];
//cards add modal
const cardListEl = document.querySelector(".cards__list");
const addNewCardButton = document.querySelector(".profile__add-button");
const cardAddModal = document.querySelector("#add-card-modal");
const addCardFormElement = cardAddModal.querySelector(".modal__form");
//cards input

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

const imagePopup = new PopupWithImage("#image-modal");
imagePopup.setEventListeners();

const cardPopup = new PopupWithForm("#add-card-modal", handleAddCardFormSubmit);
cardPopup.setEventListeners();
cardPopup.test();

const userInfo = new UserInfo(".profile__title", ".profile__description");
const userInfoPopup = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileFormSubmit
);

userInfoPopup.setEventListeners();
//----------------functions

function renderCard(cardData) {
  const card = new Card(cardData, cardTemplate, handleImageClick);
  return card.getView();
}

//----------------Event handlers
function handleProfileFormSubmit(e) {
  userInfo.setUserInfo();
  userInfoPopup.close();
}

function handleAddCardFormSubmit(inputValues) {
  const name = inputValues.title;
  const link = inputValues.url;
  const cardSection = new Section({ name, link }, renderCard, cardListEl);
  cardSection.addItem();
  addFormValidator.toggleButtonState();

  cardPopup.close(cardAddModal);
}
function handleImageClick(name, link) {
  imagePopup.open(name, link);
}

// open the modal profile
profileEditButton.addEventListener("click", () => {
  userInfo.getUserInfo();
  userInfoPopup.open();
});

//card add button to open modal
addNewCardButton.addEventListener("click", () => {
  cardPopup.open();
});

const cardSection = new Section(initialCards, renderCard, cardListEl);
cardSection.renderItems();
