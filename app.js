const express = require("express");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

app.set("views", "./views");
app.set("view engine", "ejs");


// Routes
app.get("/", (req, res) => {
  res.render("index", {text: "Hello World"});
});

app.get("/login", (req, res) => {
  res.render("login", {text: "Hello World"});
});

app.get("/register", (req, res) => {
  res.render("register", {text: "Hello World"});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});