function rand({min = 0, max = 1000}) { /// aqui passei 2 atributos dentro de um operador destructuring aqui nao tem obj ainda
    const valor = Math.random() * (max- min) +min
    return Math.floor(valor)
    
}

console.log(rand({max: 50,min: 40})) // nao preciso do ponto para acessar
const obj = { max:50, min:40 } // aqui fica gerando valores entre 40 a 50
console.log(rand(obj)) 
console.log(rand({ min: 955 }))
console.log(rand({}))