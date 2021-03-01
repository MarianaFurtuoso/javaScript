//Armazenando uma funcao em uma variavel
const imprimirSoma = function (a,b) {
    console.log(a+b)

}

imprimirSoma(2,3)

//Armazenando uma funcao arrow em uma variavel
const soma = (a,b) => { // troque a function pela setinha
    return a+ b  
}

console.log(soma(2,3))

//retorno implicito 

const subtracao = (a,b) => a-b  // aqui trocamos tb o return
console.log(subtracao(2,3))

const imprimir2 = a => console.log(a)
imprimir2("Legalll")