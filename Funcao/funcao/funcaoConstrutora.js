function Carro(velocidadeMaxima = 200, delta = 5) {
    //atribuito privado
    let velocidadeAtual = 0

    //metodo publico
    this. acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else { 
            velocidadeAtual = velocidadeMaxima
        }
    }


    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const celta = new Carro
celta.acelerar()
celta.acelerar()
celta.acelerar()
celta.acelerar()
console.log(celta.getVelocidadeAtual())


const palio = new Carro (350,20)
palio.acelerar()
palio.acelerar()

console.log(palio.getVelocidadeAtual())

