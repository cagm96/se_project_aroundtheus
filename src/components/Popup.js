// The Popup class is a generic class that opens and closes a popup.
// You won’t instantiate your Popup class directly in index.js; instead, you’ll instantiate its children classes
export default class Popup {
  constructor(popupElement) {
    this._popupElement = document.querySelector(popupElement);
    this._closeButton = this._popupElement.querySelector(".modal__close");
  }
  // It has a private method named _handleEscClose() that stores the logic for closing the popup
  // by pressing the Esc key.
  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      // Assuming 'this' refers to the object containing the close() method
      this.close();
    }
  };

  // The open() method should be called in the preexisting event handlers in index.js.
  open() {
    this._popupElement.classList.add("modal_open");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("modal_open");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  //   to the close icon of the popup.
  // The modal window should also close when users click on the shaded area around the form.
  // You won’t instantiate your Popup class directly in index.js;
  setEventListeners() {
    this._closeButton.addEventListener("click", () => {
      this.close();
    });
    this._popupElement.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("modal_open")) {
        this.close();
      }
      if (evt.target.classList.contains("modal__close")) {
        this.close();
      }
    });
  }
}
