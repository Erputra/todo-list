//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

let taskList = ["Buy Food"];
app.get("/", (req, res) => {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let valueDay = today.toLocaleDateString("en-US", options);
  res.render("index", { keyDay: valueDay, keyTask: taskList });
});

app.post("/", (req, res) => {
  taskList.push(req.body.taskname);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`htpp://localhost:${port}`);
});
