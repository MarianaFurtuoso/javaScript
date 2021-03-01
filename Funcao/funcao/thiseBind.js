const pessoa = {
    saudacao :'Bom dia!', 
    falar() {
        console.log(this.saudacao) // acessando o atributo da função com this
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()// conflito entre paradigmas da programação funcional e P.O.O.

const falaDePessoa = pessoa.falar.bind(pessoa)
falaDePessoa()
