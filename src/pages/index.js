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
const profileButton = document.querySelector(".profile__button");

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

const link = `https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg`;

api.setUserAvatar(link).then((res) => {
  console.log(res);
});

const cardDeleteModal = new PopupQuestion("#delete-card-modal");

const editFormValidator = new FormValidator(config, profileEditForm);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(config, addCardFormElement);
addFormValidator.enableValidation();

const imagePopup = new PopupWithImage("#image-modal");
imagePopup.setEventListeners();

const cardPopup = new PopupWithForm(
  "#add-card-modal",
  // handleAddCardFormSubmit
  (inputValues) => {
    api.addCard(inputValues).then((res) => {
      console.log(res);
      cardSection.addItem(res);
    });
    addFormValidator.toggleButtonState();
    cardPopup.close();
  }
);
cardPopup.setEventListeners();

const profilePopup = new PopupWithForm("#profile-avatar-modal", (url) => {
  //handles the avatar picture submit
  api.setUserAvatar(url).then((res) => {
    console.log(res);
  });
  addFormValidator.toggleButtonState();
  profileEditForm.close();
});
profilePopup.setEventListeners();

const userInfoPopup = new PopupWithForm("#profile-edit-modal", (values) => {
  userInfo.setUserInfo(values);
  api.setUserInfo(values);
  userInfoPopup.close();
});
userInfoPopup.setEventListeners();

function renderCard(cardData) {
  const card = new Card(
    cardData,
    cardTemplate,

    //handles the image click
    (name, link) => {
      imagePopup.open(name, link);
    },
    //handles the delete button click
    (id, cardElement) => {
      cardDeleteModal.open();
      cardDeleteModal.setEventListeners();
      cardDeleteModal.setSubmitAction(() => {
        api.deleteCard(id);
        cardElement.remove();
        // cardElement = null;
      });
    },
    //handles Like Button Click
    (id) => {
      api.likeCard(id).then((res) => {
        console.log(res);
      });
    },
    //removes Like Button
    (id) => {
      api.unlikeCard(id).then((res) => {
        console.log(res);
      });
    }
  );

  return card.getView();
}

// EVENT LISTENERS

addNewCardButton.addEventListener("click", () => {
  cardPopup.open();
});
profileEditButton.addEventListener("click", () => {
  userInfoPopup.open();

  const { profileName, profileJob } = userInfo.getUserInfo();

  profileNameInput.value = profileName;
  profileJobInput.value = profileJob;
});

profileButton.addEventListener("click", () => {
  profilePopup.open();
});
