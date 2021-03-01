//Clousere é espoco criado quando a uma função é declarada
//esse escope permote a função acessar e manipular variaveis externas a função

//contexto lexico em ação

const x ='Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro

}

const minhaFuncao = fora()
console.log(minhafuncao())