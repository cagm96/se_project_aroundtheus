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
const profileEditForm = profileEditModal.querySelector(".modal__form");

//cards add modal
const cardListEl = document.querySelector(".cards__list");
//console.log(cardListEl);

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const addNewCardButton = document.querySelector(".profile__add-button");
const cardAddModal = document.querySelector("#add-card-modal");
const cardCloseButton = document.querySelector("#cardModalCLose");

const addCardFormElement = cardAddModal.querySelector(".modal__form");
//cards input
const cardTitleInput = addCardFormElement.querySelector(
  ".modal__input_type_title"
);
const cardUrlInput = addCardFormElement.querySelector(".modal__input_type_url");

//image modal buttons
const imageModalCloseButton = document.querySelector("#imageModalCLose");

//----------------functions

function closePopup(popup) {
  popup.classList.remove("modal_open");
}

function openPopUp(popup) {
  popup.classList.add("modal_open");
}
const imageModal = document.querySelector("#image-modal");
function getCardElement(data) {
  //clone the template element with all its content and store it in a cardElement variable
  const cardElement = cardTemplate.cloneNode(true);

  //  access the card title and image and store them in variables
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const imageButton = cardElement.querySelector(".card__overlay-button");
  const imageFull = document.querySelector(".modal__image");
  const closeImageModal = document.querySelector("#imageModalCLose");
  const modalTitle = document.querySelector(".modal__image-title");

  //const cardModal = cardElement.querySelector("#image-modal");

  // set the path to the image to the link field of the object
  cardImageEl.src = data.link;
  //const imageLink = ;

  imageButton.addEventListener("click", () => {
    closeImageModal.addEventListener("click", () => {
      closePopup(imageModal);
    });
    modalTitle.textContent = cardTitleEl.textContent;
    imageFull.setAttribute("src", cardImageEl.src);
    imageFull.setAttribute("alt", cardTitleEl.textContent);
    imageModal.classList.add("modal_open");
  });

  // set the image alt text to the name field of the object
  cardImageEl.alt = data.name;
  // set the card title to the name field of the object, too
  cardTitleEl.textContent = data.name;
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  //return the ready HTML element with the filled-in data
  return cardElement;
}

function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
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
  renderCard({ name, link }, cardListEl);
  closePopup(cardAddModal);
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

//close the modal profile
profileCloseButton.addEventListener("click", () => {
  closePopup(profileEditModal);
});

//card add button to open modal
addNewCardButton.addEventListener("click", () => {
  cardAddModal.classList.add("modal_open");
});

cardCloseButton.addEventListener("click", () => {
  closePopup(cardAddModal);
});

initialCards.forEach((cardData) => {
  renderCard(cardData, cardListEl);
});
