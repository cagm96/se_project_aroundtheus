import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";

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
const profileCloseButton = document.querySelector(".modal__close");
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
const cardCloseButton = document.querySelector("#cardModalCLose");
const closeImageModal = document.querySelector("#imageModalCLose");
const addCardFormElement = cardAddModal.querySelector(".modal__form");
//cards input
const cardTitleInput = addCardFormElement.querySelector(
  ".modal__input_type_title"
);
const cardUrlInput = addCardFormElement.querySelector(".modal__input_type_url");

//image modal buttons
const imageModalCloseButton = document.querySelector("#imageModalCLose");
const modalTitle = document.querySelector(".modal__image-title");
const imageModal = document.querySelector("#image-modal");
const imageFull = document.querySelector(".modal__image");
const modalButton = document.querySelector("#modal__card-button");

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

//----------------functions

const createCard = (cardData) => {
  //this is the renderer
  const card = new Card(cardData, cardTemplate, handleImageClick);
  return card.getView();
};

// function closePopup(popup) {
//   popup.classList.remove("modal_open");
//   document.removeEventListener("keydown", closeByEscape);
// }

// function openPopUp(popup) {
//   popup.classList.add("modal_open");
//   document.addEventListener("keydown", closeByEscape);
// }

function renderCard(cardData, wrapper) {
  const cardElement = cardData;

  wrapper.prepend(cardElement);
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
  modalTitle.textContent = name;
  imageFull.setAttribute("src", link);
  imageFull.setAttribute("alt", name);
  openPopUp(imageModal);
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

//card add button to open modal
addNewCardButton.addEventListener("click", () => {
  openPopUp(cardAddModal);
});

// function closeByEscape(evt) {
//   if (evt.key === "Escape") {
//     const openedPopup = document.querySelector(".modal_open");
//     closePopup(openedPopup);
//   }
// }

const modals = [...document.querySelectorAll(".modal")];

modals.forEach((container) => {
  container.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("modal_open")) {
      closePopup(container);
    }
    if (evt.target.classList.contains("modal__close")) {
      closePopup(container);
    }
  });
});

initialCards.map((cardData) => {
  const card = createCard(cardData);
  return renderCard(card, cardListEl);
});

// const section = new Section(
//   { initialCards, renderCard, createCard },
//   cardListEl
// );
// section.renderItems();
