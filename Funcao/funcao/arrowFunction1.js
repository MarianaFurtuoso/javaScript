let dobro = function() {  /*Função Arrow como se tivesse um this constante que nunca muda  */
    return 2 * a
}

dobro = (a) => {
   return 2 * a

}

dobro = a => 2 * a  // return implicito 
console.log(dobro(Math.PI))

let ola = function()  {
    return ' Olá'
}

ola = () => 'Olá'
ola = _=> 'Olá' // possui um paramento
console.log(ola())