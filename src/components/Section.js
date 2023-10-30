export default class Section {
  constructor(items, renderer, cardElements) {
    this._items = items;
    // The items property should be an array of data,
    // which you must add to the page when it loads.
    this._renderer = renderer;
    // The renderer property should be a function that
    // creates and adds a single item to the page.
    this._cardElements = cardElements;
    // a CSS class selector where you'll add the card elements.
  }
  test() {
    console.log(this._items);
  }
  renderItems() {
    //   //It should iterate through the items array and call the renderer() function on each item.
    //   //This method should be called once on page load.
    this._items.forEach((item) => {
      this._renderer(item, this._cardElements);
    });
  }
  addItem() {
    // takes a DOM element and adds it to the container.
    // This method should be called when adding an individual card to the DOM.
  }
}
