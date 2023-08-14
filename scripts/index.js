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
let cardListEl = document.querySelector(".cards__list");
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

function closePopop() {
  profileEditModal.classList.remove("modal_open");
  cardAddModal.classList.remove("modal_open");
  imageModal.classList.remove("modal_open");
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
  const headerText = cardTitleEl.textContent;
  //const cardModal = cardElement.querySelector("#image-modal");
  let imageLink;
  // set the path to the image to the link field of the object
  cardImageEl.src = data.link;
  imageLink = cardImageEl.src;
  imageButton.addEventListener("click", () => {
    modalTitle.textContent = headerText;
    imageFull.setAttribute("src", imageLink);
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
  closeImageModal.addEventListener("click", () => {
    closePopop();
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
  closePopop();
}

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  const cardElement = getCardElement({
    name,
    link,
  });
  renderCard({ name, link }, cardListEl);
  closePopop(cardAddModal);
}
//----------------Event Listeners
//profileFormElement.addEventListener("submit", handleProfileFormSubmit);
profileEditForm.addEventListener("submit", handleProfileFormSubmit);
addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);

// open the modal profile
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_open");
});

//close the modal profile
profileCloseButton.addEventListener("click", closePopop);
profileEditForm.addEventListener("submit", handleProfileFormSubmit);

//card add button to open modal
addNewCardButton.addEventListener("click", () => {
  cardAddModal.classList.add("modal_open");
});

cardCloseButton.addEventListener("click", closePopop);

initialCards.forEach((cardData) => {
  renderCard(cardData, cardListEl);
});
