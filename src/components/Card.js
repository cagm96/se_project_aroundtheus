export default class Card {
  constructor(
    { isLiked, name, link, _id },
    cardSelector,
    handleImageClick,
    handleDeleteButton,
    handleLikeButtonClick,
    removeLikeButton
  ) {
    this._isLiked = isLiked;
    this._name = name;
    this._link = link;
    this._id = _id;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleDeleteButton = handleDeleteButton;
    this._handleLikeButtonClick = handleLikeButtonClick;
    this._removeLikeButton = removeLikeButton;
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        if (this._isLiked) {
          this._removeLikeButton(this._id, this._cardElement);
        } else {
          this._handleLikeButtonClick(this._id, this._cardElement);
        }
      });

    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteButton(this._id, this._cardElement);
      });

    this._cardElement
      .querySelector(".card__overlay-button")
      .addEventListener("click", () => {
        this._handleImageClick(this._name, this._link);
      });
  }

  _getElement() {
    return this._cardSelector.content.querySelector(".card").cloneNode(true);
  }

  getView() {
    this._cardElement = this._getElement();
    const cardImageEl = this._cardElement.querySelector(".card__image");
    if (this._isLiked) {
      this._cardElement
        .querySelector(".card__like-button")
        .classList.add("card__like-button_active");
    } else {
      this._cardElement
        .querySelector(".card__like-button")
        .classList.remove("card__like-button_active");
    }
    cardImageEl.src = this._link;
    cardImageEl.alt = this._name;

    const cardTitleEl = this._cardElement.querySelector(".card__title");
    cardTitleEl.textContent = this._name;

    this._setEventListeners();

    return this._cardElement;
  }
}
