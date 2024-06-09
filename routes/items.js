const Item = require("../item");
const express = require("express");

const router = express.Router();

router.get("", (req, res, next) => {
  try {
    return res.json({ items: Item.findAll() });
  } catch (err) {
    return next(err);
  }
});

router.post("", (req, res, next) => {
  try {
  } catch (err) {}
});

router.patch();

router.delete();
