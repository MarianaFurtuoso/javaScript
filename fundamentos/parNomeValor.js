//par nome/valor
const saudacao = 'Opa' //contexto léxico, é contexto ou local onde sua variavel foi constituida no codico


function exec () {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao

}

//Objetos são grupos alinhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        lougradouro: 'Rua Muito Legal',
        numero:789
    }

}

console.log(saudacao)
console.log(exec())
console.log(cliente)