import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  //Create one instance of this class in index.js and call its parent’s setEventListeners() method.
  constructor() {}
  // The open() method of the PopupWithImage class will need to accept the name and link of the card as arguments
  // and add an image to the popup and the corresponding image src attribute along with a caption for the image.
  //  This method should be called in your image click handler in index.js.

  open(data) {
    // data should be an object containing the name and link
    // set the image's src and alt
    // set the caption's textContent
    super.open();
  }
}
