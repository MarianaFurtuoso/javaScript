const pilotos = ['Vettel','Alonso', 'Raikkonen', 'Massa']
pilotos.pop()//remove o ultimo
console.log(pilotos)

pilotos.push('Joao')
console.log(pilotos) //adc no ultimo 

pilotos.unshift('Hamilton')//adc no primeira posição
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // pega parte da posição que coloquei e cria novo array
console.log(algunsPilotos1)