export default class Section {
  constructor(renderer, container) {
    // this._items = items;
    // The items property should be an array of data,
    // which you must add to the page when it loads.
    this._renderer = renderer;
    // The renderer property should be a function that
    // creates and adds a single item to the page.
    this._container = container;
    // a CSS class selector where you'll add the card elements.
  }

  renderItems(items) {
    //   //It should iterate through the items array and call the renderer() function on each item.
    //   //This method should be called once on page load.
    items.forEach((item) => {
      const element = this._renderer(item);
      this._container.append(element);
    });
  }

  // takes a DOM element and adds it to the container.
  // This method should be called when adding an individual card to the DOM.
  addItem({ name, link }) {
    const element = this._renderer({ name, link });
    this._container.prepend(element);
  }
}
