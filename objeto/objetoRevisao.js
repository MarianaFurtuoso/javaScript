//coleção dimâmica de pares chave/ valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = ' Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
     modelo: 'A4',
     valor: 89000,
     proprietario: {
         nome: 'Mariana',
         idade: '21',
         endereco: {
             logradouro: 'Rua Curitiba',
             numero: 250
         }



     }, 
     condutores: [{
         nome:'Guilherme',
         idade:'22'
     },{
         nome: 'Lia',
         idade: 42
     }], 
     calcularValorSeguro: function(){
         //...
     }

     


}
carro.proprietario.endereco.numero = 1000 //* TEMOS AQUI FORMA DE MUDAR OS ATRIBUTOS 
     carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'// OUTRA MANEIRA 
     console.log(carro)
     
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
