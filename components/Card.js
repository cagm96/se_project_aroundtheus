export default class Card {
  constructor({ name, link }) {
    this._name = name;
    // this._link = link;
    // this._cardSelector = cardSelector;
  }
  testMethod() {
    console.log(this._name);
  }

  //   _setEventListeners() {
  //     //.card__like-button"
  //     this._cardElement
  //       .querySelector(".card__like-button")
  //       .addEventListener("click", () => {
  //         this._handleLkikeIcon();
  //       });

  //     // .card__delete-button
  //     const deleteButton = this._cardElement.querySelector(
  //       ".card__delete-button"
  //     );
  //   }

  //   _handleLikeIcon() {
  //     this._cardElement
  //       .querySelector(".card__like-button")
  //       .classList.toggle("card__like-button_is-active");
  //   }

  //   getView() {
  //     this._cardElement = document
  //       .querySelector(this._cardSelector)
  //       .content.querySelector(".card")
  //       .cloneNode(true);

  //     //get the card view
  //     //set event listeners
  //     this._setEventListeners();
  //     // return the card
  //   }
}
