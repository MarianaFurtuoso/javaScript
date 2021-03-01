console.log ('01)','1' ==1) // aqui está comparando valores
console.log('02)', '1' ===1)// nesse caso estamos verificando se 1 é estritamente igual, em todos os aspectos
console.log('03)', '3' != 3)// aqui pra ver se os valores são diferente
console.log('04)', '4' !==4)// comparando valor e tipo

console.log('05)', 3 <=2);// nesse caso que 3 é menor q 2 ou idual


const d1 = new Date(0)
const d2 = new Date(0)
console.log('06)',d1===d2)// estao comparado espaco de memoria
console.log('06)',d1===d2)
console.log('07', d1.getTime()===d2.getTime)// esta comparando o valor zero 

console.log('08', undefined == null)
console.log('08', undefined === null)// é melhor usar estritamente igual