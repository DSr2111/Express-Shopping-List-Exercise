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

describe("GET /items/:name", async function () {
  test("Gets a single item", async function () {
    const response = await request(app).get(`/items/${item.name}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.item).toEqual(item);
  });

  test("Responds with 404 if can't find item", async function () {
    const response = await request(app).get(`/items/0`);
    expect(response.statusCode).toBe(404);
  });
});
