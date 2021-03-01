Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i <this.length;i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['ANA', 'MARIA', 'NANDA', 'RAFAEL']

aprovados.forEach2(function(nome, indice){ /* como implentar proprio forEach que criar proprio metodo */
    console.log(`${indice +1}: ${nome}`)
})
