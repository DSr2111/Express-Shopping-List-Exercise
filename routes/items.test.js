process.env.NODE_ENV = "test";
// npm packages
const request = require("supertest");
// app imports
const app = require("../app");

let items = require("../fakeDb");
const { afterEach } = require("node:test");

let item = { name: "silly", price: 200 };

beforeEach(async () => {
  items.push(item);
});

afterEach(async () => {
  items = [];
});
