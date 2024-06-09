const items = require("./fakeDb");

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    items.push(this);
  }

  static findAll() {
    return items;
  }

  static update(name, data) {
    let foundItem = Item.findAll(name);
    if (foundItem === undefined) {
      throw { message: "Item not found", status: 404 };
    }
  }
}
