//Array é um objeto seu typeof, estrutura 

let aprovados = new Array('Bia', 'Mariana', 'Guilherme')
console.log(aprovados)

aprovados = ['Bia','Guilherme', 'Mariana']
console.log(aprovados[2])
console.log(aprovados[3]) // não tem ngm ainda 

aprovados[3]= 'Priscila'
aprovados.push('Ana')
console.log(aprovados)
console.log(aprovados.length) // qual tamanho do array

aprovados[9] = 'Nanda'
console.log(aprovados.length)//adc os espaço com undefined entre 6 a 8

console.log(aprovados)
aprovados.sort()//aqui está organizando em ordem alfabetica e altera o array já existente
console.log(aprovados)


delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados)

aprovados = ['Bia', 'Guilherme', 'Mariana']
aprovados.splice(1,1,'Santiago')/* o splice fala a partir de qual pósição no array vai deletar e quantos vai 
adicionar a partir daquela posição */
console.log(aprovados)