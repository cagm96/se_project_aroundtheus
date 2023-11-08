// The Popup class is a generic class that opens and closes a popup.
// You won’t instantiate your Popup class directly in index.js; instead, you’ll instantiate its children classes
export default class Popup {
  constructor(popupElement) {
    this._popupElement = popupElement;
    this._closeButton = this._popupElement.querySelector(".modal__close");
  }

  test() {
    console.log(this._popupElement);
    console.log(this._closeButton);
  }

  // The open() method should be called in the preexisting event handlers in index.js.
  open() {
    this._selector.classList.add("modal_open");
    document.addEventListener("keydown", _handleEscClose());
  }

  close() {
    this._selector.classList.remove("modal_open");
    document.removeEventListener("keydown", _handleEscClose());
  }

  // It has a private method named _handleEscClose() that stores the logic for closing the popup
  // by pressing the Esc key.
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      const openedPopup = document.querySelector(".modal_open");
      close(openedPopup);
    }
  }

  //   to the close icon of the popup.
  // The modal window should also close when users click on the shaded area around the form.
  // You won’t instantiate your Popup class directly in index.js;
  setEventListeners() {
    this._closeButton.addEventListener("click", () => {
      this.close();
    });
    this._selector.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("modal_open")) {
        close(container);
      }
      if (evt.target.classList.contains("modal__close")) {
        close(container);
      }
    });
  }
}
