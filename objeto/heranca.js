//herança pouca ctrl C e V
const ferrari ={
    modelo: 'F40',
    velMax: 324

    
}
//prototico serie procurar atribuito no pai na herança 
console.log(ferrari.__proto__)
console.log(ferrari.__proto__=== Object.prototype)
console.log(Object.prototype.__proto__===null)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)