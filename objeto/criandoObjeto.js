//usando notação literla
const obj1 = {}
console.log(obj1)

// Object em js, nesse exemplo é atraves de uma função , com operador new
console.log(typeof Object, typeof new Object)
const objs = new Object
console.log(objs)

//Funções construtora, que eu mesma crio
function Produto (nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Fucao Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase /30) * (30 - faltas)
        }


    }

}

const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())


//Obejtc.create
const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)

//Um função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')  // parse converte texto que é JSON em Objeto
console.log(fromJSON.info)