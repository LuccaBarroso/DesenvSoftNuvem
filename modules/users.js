
const users = [];


const register = (req, res) => {
  try {
    const { nome, email, senha, senhaConfirmar } = req.body;

    if(!nome || !email || !senha || !senhaConfirmar) {
        return res.render("register", { msg: "Preencha todos os campos!" });
    }

    users.push({
        id: Date.now().toString(),
        nome,
        email,
        senha,
    });

    console.log(users);
    return res.render("login", { msg: "Usuário cadastrado com sucesso!" , msgType: "success"});
  } catch(e) {
    console.log(e);
    return res.render("register", { msg: "Erro ao cadastrar usuário" });
  }
}

module.exports = {
  register
}