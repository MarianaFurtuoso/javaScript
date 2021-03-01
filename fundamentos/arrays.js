const valores = [7.7 , 8.9 , 6.3 , 9.2] // tem usar [ ] e as , que separam as posições
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10 // aqui adicionamos uma posição no array
console.log(valores)
console.log(valores.length)// fala quantas possições temos

valores.push({id: 3}, false , null ,  'teste')// aqui adicionamos essas informações
console.log(valores)

console.log(valores.pop())// ele tira o ultimo que é o teste
console.log(valores)
delete valores[0]
console.log(valores)// aqui deletamos o primeiro item com uso do delete

console.log(typeof valores)// um aray js é tipo objeto 