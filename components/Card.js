import * as myModule from "../pages/index.js";
export default class Card {
  constructor({ name, link }, cardSelector, handleImageClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    //.card__like-button"
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeButton();
      });

    // .card__delete-button

    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteButton();
      });

    this._cardElement
      .querySelector(".card__overlay-button")
      .addEventListener("click", () => {
        this._handleImageButton();
      });
  }

  _handleLikeButton() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }
  _handleDeleteButton() {
    this._cardElement.remove();
  }
  _handleImageButton() {
    myModule.modalTitle.textContent = this._name;

    myModule.imageFull.setAttribute("src", this._link);
    myModule.imageFull.setAttribute("alt", this._name);
    myModule.openPopUp(myModule.imageModal);
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    const cardImageEl = this._cardElement.querySelector(".card__image");
    cardImageEl.src = this._link; // set the path to the image to the link field of the object
    cardImageEl.alt = this._name; // set the image alt text to the name field of the object

    const cardTitleEl = this._cardElement.querySelector(".card__title");
    cardTitleEl.textContent = this._name; // set the card title to the name field of the object, too

    //get the card view
    //set event listeners
    this._setEventListeners();

    console.log(this);
    return this._cardElement;
  }
}
