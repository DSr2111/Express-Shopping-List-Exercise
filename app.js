const express = require("express");
const app = express();
const itemsRoutes = require("./routes/items");

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});

module.exports = app;
