// a ideia é mapear o array para criar outro array utilizando o array original para tranformar msm tamanho
//não altera o antigo array o mantem 
const nums = [1, 2, 3, 4, 5]

let resultadodobrado = nums.map(function(e){
    return e * 2
})

console.log(resultadodobrado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinehrio = e => ` R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultadodobrado = nums.map(soma10).map(triplo).map(paraDinehrio)
console.log(resultadodobrado)