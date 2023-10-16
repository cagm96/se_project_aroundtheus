export default class Card {
  constructor({ name, link }, cardSelector, handleImageClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeButton();
      });

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
    modalTitle.textContent = this._name;
    imageFull.setAttribute("src", this._link);
    imageFull.setAttribute("alt", this._name);

    this._handleImageClick("#image-modal");
  }

  _getElement() {
    return this._cardSelector.content.querySelector(".card").cloneNode(true);
  }

  getView() {
    this._cardElement = this._getElement();
    const cardImageEl = this._cardElement.querySelector(".card__image");
    cardImageEl.src = this._link;
    cardImageEl.alt = this._name;

    const cardTitleEl = this._cardElement.querySelector(".card__title");
    cardTitleEl.textContent = this._name;

    this._setEventListeners();
    console.log(this._cardElement);

    return this._cardElement;
  }
}
