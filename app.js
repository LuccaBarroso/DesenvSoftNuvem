const express = require("express");
const { register, login } = require("./modules/users");
const { getProdutos } = require("./modules/produtos");

const app = express();
const port = 3000;


app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

//Rota de cadastro
app.post("/register", register);

//Rota de login
app.post("/login", login);

// Paginas estaticas HTML
app.get("/", (req, res) => {
  res.render("index", {produtos: getProdutos()});
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});