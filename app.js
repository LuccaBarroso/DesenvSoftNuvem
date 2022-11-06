const express = require("express");
const { register, login } = require("./modules/users");
const { produto, aluguel } = require("./modules/produtos");
const { getProdutos, getAlugueis } = require("./modules/db");

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

//Rota de aluguel
app.post("/aluguel/:id", aluguel);

// Paginas estaticas HTML
app.get("/", (req, res) => {
	res.render("index", { produtos: getProdutos() });
});

app.get("/login", (req, res) => {
	res.render("login");
});

app.get("/register", (req, res) => {
	res.render("register");
});

app.get("/aluguel/:id", (req, res) => {
	res.render("aluguel", { produto: produto(req.params.id) });
});

app.get("/alugueis/:id", (req, res) => {
	console.log(getAlugueis());
	res.render("alugueis", { alugueis: getAlugueis().find(e => e.user.id === req.params.id) });
});

app.get("/produto/:id", (req, res) => {
	res.render("produto", { produto: produto(req.params.id) });
});

app.get("/agradecimento", (req, res) => {
	res.render("agradecimento");
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
