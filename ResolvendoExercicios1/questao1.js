const [a,b,c,d] = [3,5,1,15]
const soma = a + b;
const subtracao = a - b;
const multiplicacao  = a * b;
const divisao = a / b;

console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)

// Jeito mais facil e rapido 

function calcularOperacoes (operador1, operador2) {
    console.log(operador1+operador2, operador1- operador2, operador1 * operador2, operador1 / operador2)
}

calcularOperacoes(4,2)