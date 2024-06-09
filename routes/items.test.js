process.env.NODE_ENV = "test";
// npm packages
const request = require("supertest");
// app imports
const app = require("../app");

let items = require("../fakeDb");

let item = { name: "silly", price: 200 };

beforeEach(async () => {
  items.push(item);
});
