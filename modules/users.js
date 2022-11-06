const bcrypt = require("bcrypt");
const { getProdutos, getUsers, addUser } = require("./db.js");

const saltRounds = 10;

const register = async (req, res) => {
	try {
		const { nome, email, senha, senhaConfirmar } = req.body;

		if (senha !== senhaConfirmar) {
			res.render("register", { msg: "Senhas precisam ser iguais!" });
		}

		if (!nome || !email || !senha || !senhaConfirmar) {
			return res.render("register", { msg: "Preencha todos os campos!" });
		}
		return bcrypt.hash(senha, saltRounds, (err, hash) => {
			if (err) {
				console.log(err);
			} else {
				addUser({
					id: Date.now().toString(),
					nome,
					email,
					senha: hash,
				});
				console.log(getUsers());
				return res.render("login", { msg: "Usuário cadastrado com sucesso!", msgType: "success" });
			}
		});
	} catch (e) {
		console.log(e);
		return res.render("register", { msg: "Erro ao cadastrar usuário" });
	}
};

const login = (req, res) => {
	try {
		const { email, senha } = req.body;
		if (!email || !senha) {
			return res.render("login", { msg: "Preencha todos os campos!" });
		}

		const user = getUsers().find((user) => user.email === email);

		if (!user) {
			return res.render("login", { msg: "Usuário não encontrado!" });
		}

		return bcrypt.compare(senha, user.senha, (err, result) => {
			if (err) {
				console.log(err);
			} else {
				if (result) {
					return res.render("index", {
            produtos: getProdutos(),
						msg: "Logado com sucesso!",
						msgType: "success",
						user: user,
					});
				} else {
					return res.render("login", { msg: "Senha incorreta!" });
				}
			}
		});
	} catch (e) {
		console.log(e);
		return res.render("login", { msg: "Erro ao logar usuário" });
	}
};

module.exports = {
	register,
	login,
};
