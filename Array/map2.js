const carrinho = [  // aqui temos JSON
    '{"nome": "Arroz", "preco": 25.04}',
    '{"nome": "banana", "preco": 5.00}'
    
]

//Aqui estamos passando as string ele para objeto
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 


const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
