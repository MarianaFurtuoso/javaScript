console.log(Math.ceil(6.1))// eleva ao tento ceil


const obj1 = {}
obj1.nome = 'Bola' // criar dinamicamente esse atribuito
//obj1['nome'] = 'Bola2' é semelhante a ponto
console.log(obj1.nome)


function Obj(nome) {
   this.nome = nome // aqui estamos criando um atribuito publico com a notação this.name

}

const obj2 = new Obj ('Cadeira')
const Obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(Obj3.nome) // vc acessa membros de objetos com a notação .
Obj3.exec()