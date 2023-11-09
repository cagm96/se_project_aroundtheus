import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  //Create one instance of this class in index.js and call its parent’s setEventListeners() method.
  constructor(popupElement) {
    super(popupElement);

    // this._imageFull = super._popupElement.querySelector(".modal__image");
    // this._modalTitle = super._popupElement.querySelector(".modal__image-title");
  }
  // The open() method of the PopupWithImage class will need to accept the name and link of the card as arguments
  // and add an image to the popup and the corresponding image src attribute along with a caption for the image.
  //  This method should be called in your image click handler in index.js.
  imagepopuptest() {
    console.log(super._popupElement);
  }

  open({ name, link }) {
    // data should be an object containing the name and link
    // set the image's src and alt
    // set the caption's textContent

    this._modalTitle.textContent = name;
    this._imageFull.setAttribute("src", link);
    this._imageFull.setAttribute("alt", name);
    super.open();
  }
}
d;
