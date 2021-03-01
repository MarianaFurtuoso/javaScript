//forma de percorre o array para exemplo calculos entre outros
const aprovados = ['ANA', 'MARIA', 'NANDA', 'RAFAEL']

aprovados.forEach(function(nome, indice){ /* forEach percorre e está enumerando */
    console.log(`${indice +1}: ${nome}`)
})

aprovados.forEach(nome => console.log(nome))


//aqui armazenou o array numa constante e percorreu ela
const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)