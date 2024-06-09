const express = require("express");
const app = express();

app.get();

app.patch();

app.post();

app.delete();

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});

module.exports = app;
