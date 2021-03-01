const prod1 = {}
// um par de { } é forma de criar um objeto vazio
prod1.nome = 'Celular Ultra Legal'
// um objeto é uma coleção de chaves e valores
prod1.preco = 5000.89
prod1["Desconto Top"] = 0.10 // evitar atributos com espaço, só exemplo

console.log(prod1)


const prod2 = { 
    nome : "Vestido",
    preco : 50.00,
    obj :  {                   // temos um objeto dentro de um objeto 
        blabla: 2 
    }

}

console.log(prod2)

'{ "nome" : "Vestido","preco" : 50.00,}'  /// isso é json que é formato textual 
// objeto é atributo e comportamento 