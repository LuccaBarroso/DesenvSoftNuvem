const { getProdutos, getUsers, addAlugueis } = require("./db.js");

const produto = (id, res) => {
	return getProdutos().find((e) => e.id === parseInt(id));
};

const aluguel = (req, res) => {
	const { idusuario, cep, identificacao, logradouro, numero, complemento, referencia, bairro, cidade, uf, pagamento } = req.body;

	const usuario = getUsers().find((e) => e.id === idusuario);
	const produto = getProdutos().find((e) => e.id === parseInt(req.params.id));

	const aluguel = {
		endereco: {
			cep,
			identificacao,
			logradouro,
			numero,
			complemento,
			referencia,
			bairro,
			cidade,
			uf,
		},
		user: usuario,
		produto,
		pagamento,
	};

	if (!usuario) {
		return res.render("aluguel", { produto: produto, msg: "Usuário não encontrado! Faça login novamente." });
	}

	addAlugueis(aluguel);

	return res.render("agradecimento", { usuario: usuario }); 
};

module.exports = {
	produto,
	aluguel,
};
