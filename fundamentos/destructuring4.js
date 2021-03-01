function rand([min=0,max=1000]) {  // aqui estabalece se min foi maior, ele troca de lugar com o maximo
  if (min>max) [min,max] = [max, min]
  const valor = Math.random()* (max-min) + min
  return Math.floor(valor)


}

console.log(rand([50,40]))