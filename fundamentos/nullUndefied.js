let valor // não foi inicializada
console.log(valor)

valor = null // ausencia de valor, 
console.log(valor)
//console.log(valor.toString())// não tem como acessar nulll, logo temos ERRO

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

// posso atribuir null para limpar uma variavel, o seja end

produto.preco = undefined  // evitar esse pra atribuir
console.log(!!produto.preco)
delete produto.preco
console.log(produto)

produto.preco = null // sem preço 
console.log(!!produto.preco)
console.log(produto)


