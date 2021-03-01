//pessoa -> 123(o endereço de memoria) -> { ... }
const pessoa = { nome: 'Joao'} 
pessoa.nome = ' Pedro'
console.log(pessoa)


/* O objeto é uma constante nunca muda de endereço mais pode mudar seu atribuito   */

Object.freeze(pessoa) // aqui congela o objeto não podemos mudar sue conteudo/atribuito
