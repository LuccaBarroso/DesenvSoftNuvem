let produtos = [
  {id: 0, name: 'Escuagua', description: "Isso mesmo, você escurrega e cai na água!", price: 1000, img: 'img/produto1.jpg'},
  {id: 1, name: 'Gigantesco Labirinto', description: "Melhor opção pra quem gosta de se perder na diversão!", price: 5000, img: 'img/produto2.jpg'},
  {id: 2, name: 'Not a pocket minion', description: "Um amarelinho que gosta de banana, será que temos os direitos altorais pra ter esse brinquedo?", price: 1000, img: 'img/produto3.jpg'},
  {id: 3, name: 'Basicão', description: "O clássico, famoso, conhecido mundialmente, isso mesmo o basicão.", price: 1000, img: 'img/produto4.jpg'},
  {id: 4, name: 'Futsabão', description: "É extremamente intuitivo, tem sabão, tem bola, tem criança caindo, sabão entrando no olho, crianças chorando. Acho que descobri um trauma de infância escrevendo essa descrição!", price: 1000, img: 'img/produto5.jpg'},
  {id: 5, name: 'Touro Mecânico', description: "Nenhum touro foi machucado durante a produção dessse brinquedo!", price: 1000, img: 'img/produto6.jpg'},
  {id: 6, name: 'Jurassic Park', description: "Para os fans de coração da triologia jurassic park. Não, não precisamos de direitor altorais!", price: 1000, img: 'img/produto7.jpg'},
  {id: 7, name: 'Corridinhas', description: "Exelente para dar uma corridinha!", price: 1000, img: 'img/produto8.jpg'},
]

const getProdutos = () => {
  return produtos;
}

module.exports = {
  getProdutos
}