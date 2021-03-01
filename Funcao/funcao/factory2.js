function criarProduto(nome,preco) {
    return{
        nome,
        preco,
        desconto: 0.1


    }
}

console.log(criarProduto('Banana',1.99))
console.log(criarProduto('Morango',5.99))