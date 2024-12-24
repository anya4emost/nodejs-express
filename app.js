const express = require("express");
const app = express();
const port = 3030;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.send("Список всех пользователей");
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry cant find that! 404");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
