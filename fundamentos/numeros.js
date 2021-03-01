const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1+peso2)

console.log(media.toFixed(2))  // toFixed eu estabeleço a qunatidade de casa decimais
console.log(media.toString(2))  /* Aqui o toString transformou em string e passou para binário (2) e media 
 a media mesmo com uma qunatidade estabelecida de casa decimais na linha 14 
não interfere ela continua todos os nº*/
console.log(typeof media) // aqui fala tipo de media sem relevar passos anteriores
console.log(typeof Number)// Number maiusculo é diferente do minusculo