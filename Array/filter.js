//criar um array de outro usando filtro do que quer
//site da MDN da mozila tem bastante info
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Iphone', preco: 12.49, fragil: true}
]

console.log(produtos.filter(function(p) {
    return p.preco > 2500
}))

const caro = produto => produto.preco >=3000
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))