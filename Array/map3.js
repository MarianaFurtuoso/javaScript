Array.prototype.map2 = function(callback) { //implementand seu proprio array
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i,this))
    }
    return newArray
}

const carrinho = [  // aqui temos JSON
    '{"nome": "Arroz", "preco": 25.04}',
    '{"nome": "banana", "preco": 5.00}'
    
]

//Aqui estamos passando as string ele para objeto
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 


const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)
