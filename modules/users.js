const bcrypt = require("bcrypt");

const saltRounds = 10;
var password = process.env.SECRET_KEY;

const users = [];


const register = async (req, res) => {
  try {
    const { nome, email, senha, senhaConfirmar } = req.body;

    if(senha !== senhaConfirmar) {
      res.render("register", { msg: "Senhas precisam ser iguais!" });
    }

    if(!nome || !email || !senha || !senhaConfirmar) {
        return res.render("register", { msg: "Preencha todos os campos!" });
    }
    return bcrypt.hash(senha, saltRounds, (err, hash) => {
      if(err) {
        console.log(err);
      }else{
        users.push({
            id: Date.now().toString(),
            nome,
            email,
            senha: hash
        });
        console.log(users);
        return res.render("login", { msg: "Usuário cadastrado com sucesso!" , msgType: "success"});
      }
    });
  } catch(e) {
    console.log(e);
    return res.render("register", { msg: "Erro ao cadastrar usuário" });
  }
}

const login = (req, res) => {
  try {
    const { email, senha } = req.body;
    if(!email || !senha) {
      return res.render("login", { msg: "Preencha todos os campos!" });
    }

    const user = users.find((user) => user.email === email);
    
    if(!user) {
      return res.render("login", { msg: "Usuário não encontrado!" });
    }

    return bcrypt.compare(senha, user.senha, (err, result) => {
      if(err) {
        console.log(err);
      }else{
        if(result) {
          return res.render("index", { msg: "Logado com sucesso!" , msgType: "success", user: {
            nome: user.nome,
            email: user.email,
            id: user.id
          }});
        }else{
          return res.render("login", { msg: "Senha incorreta!" });
        }
      }
    });

  } catch(e) {
    console.log(e);
    return res.render("login", { msg: "Erro ao logar usuário" });
  }
}

module.exports = {
  register,
  login
}