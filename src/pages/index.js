import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupQuestion from "../components/PopupQuestion.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import "../pages/index.css";

//---------------Elements
const cardTemplate = document.querySelector("#card-template");
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditForm = document.forms["modal__form"];
const profileNameInput = profileEditForm.querySelector("#profile-title-input");
const profileJobInput = profileEditForm.querySelector(
  "#profile-description-Input"
);
//cards add modal
const cardListEl = document.querySelector(".cards__list");
const addNewCardButton = document.querySelector(".profile__add-button");
const cardAddModal = document.querySelector("#add-card-modal");
const addCardFormElement = cardAddModal.querySelector(".modal__form");
//image modal buttons
const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const userInfo = new UserInfo(".profile__title", ".profile__description");
const cardSection = new Section(renderCard, cardListEl);

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "f1dab6ed-e5ba-44ef-bef1-7369d7e9bf0d",
    "Content-Type": "application/json",
  },
});

api.getUserInfo().then((res) => {
  userInfo.setUserInfo(res);
});
api.getInitialCards().then((res) => {
  cardSection.renderItems(res);
});
function test(id) {
  api.deleteCard(id);
}
const cardDeleteModal = new PopupQuestion("#delete-card-modal", test);

const editFormValidator = new FormValidator(config, profileEditForm);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(config, addCardFormElement);
addFormValidator.enableValidation();

const imagePopup = new PopupWithImage("#image-modal");
imagePopup.setEventListeners();

const cardPopup = new PopupWithForm("#add-card-modal", handleAddCardFormSubmit);
cardPopup.setEventListeners();
addNewCardButton.addEventListener("click", () => {
  cardPopup.open();
});

const userInfoPopup = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileFormSubmit
);
userInfoPopup.setEventListeners();
//----------------functions
function handleImageClick(name, link) {
  imagePopup.open(name, link);
}
function handleDeleteButton(id) {
  cardDeleteModal.open();
  cardDeleteModal.setEventListeners(id);
}
function renderCard(cardData) {
  console.log(cardData);
  const card = new Card(
    cardData,
    cardTemplate,
    handleImageClick,
    handleDeleteButton
  );

  return card.getView();
}
//----------------Event handlers
function handleProfileFormSubmit(values) {
  userInfo.setUserInfo(values);
  api.setUserInfo(values);
  userInfoPopup.close();
}
function handleAddCardFormSubmit(inputValues) {
  api.addCard(inputValues);
  cardSection.addItem(inputValues);
  addFormValidator.toggleButtonState();

  cardPopup.close();
}

// open the modal profile
profileEditButton.addEventListener("click", () => {
  userInfoPopup.open();

  const { profileName, profileJob } = userInfo.getUserInfo();

  profileNameInput.value = profileName;
  profileJobInput.value = profileJob;
});

//card add button to open modal
