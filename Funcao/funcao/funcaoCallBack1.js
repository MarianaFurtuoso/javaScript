const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice +1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

/*Callback é passa um função vai ser chamada quando evento acontecer */
/*cada elemento  é percorrido no array é um evento */