export default class Card {
  constructor(
    { name, link, _id },
    cardSelector,
    handleImageClick,
    handleDeleteButton
  ) {
    this._name = name;
    this._link = link;
    this._id = _id;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;

    this._handleDeleteButton = handleDeleteButton;
  }
  test() {
    console.log(this._id);
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
    // this._cardElement.remove();
    // this._cardElement = null;
    this._handleDeleteButton(this._id);
  }

  _handleImageButton() {
    this._handleImageClick(this._name, this._link);
  }

  _getElement() {
    return this._cardSelector.content.querySelector(".card").cloneNode(true);
  }

  getView() {
    this._cardElement = this._getElement();
    const cardImageEl = this._cardElement.querySelector(".card__image");

    // cardId.textContent = this._id;
    cardImageEl.src = this._link;
    cardImageEl.alt = this._name;

    const cardTitleEl = this._cardElement.querySelector(".card__title");
    cardTitleEl.textContent = this._name;

    this._setEventListeners();

    return this._cardElement;
  }
}
