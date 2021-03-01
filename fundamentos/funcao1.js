//função sem retorno
//função é bloco de codigo, ai vc dar nome, colocamos paramento de entrada ou nao, retorna ou nãp retorna
function imprimirSoma(a, b) {// o que está dentro do paramento é os paramento 
      console.log(a + b)

}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2 , 10 , 4 , 5 , 6 , 7, 8)

//função com retorno
function soma( a,b = 0) {
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))
console.log()
