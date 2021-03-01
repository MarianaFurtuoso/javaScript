const escola = "Cod3r"

console. log(escola.charAt(4))// aqui temos um indice de posição de letra
//indice começa da posição 0 

console.log(escola.charCodeAt(3))// pegando o termo que está posição e descobrindo quanto vale na tabela ASC
//ou unicode que equivale em HTML

console.log(escola.indexOf('r')) // aqui para sabermos qual posição a letra ocupa

console.log(escola.substring(1)) // aqui mostra a parta da posição que ocupa a 1
console.log(escola.substring(0, 3)) // aqui é a partir de 0 e até 3 caracters ai são 0,1,2 

console.log('Escola '.concat(escola).concat("!"))// aqui pegou o Escola dentro das ' ' juntamente com concat seguintes
console.log('Escola ' + escola + "!") // aqui + tem mesma função concat
console.log(escola.replace(3,'e'))// aqui o replace muda o que está na posição 3 que é 3 por e
console.log(escola.replace(/\d/,'e')) // /\d/ é substituir todos os digitos por e
console.log(escola.replace(/\w/g,'e'))// /\w/ para substitui todas as letras e digitos e flag "g" precisa está tb

console.log('Ana,Maria,Pedro'.split(','))//somente utilizando a split que pegamos essa sting e torna array
//dentro do parentese coloca-se oq vai dividir, a virgula divide
console.log('Ana,Maria,Pedro'.split(/,/))// podemos usar regxes

