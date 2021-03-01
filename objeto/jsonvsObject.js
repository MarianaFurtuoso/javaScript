// utilizando comunicação entre sistemas
//obj vira texto
const obj = { a:1, b: 2, c: 3, soma() { return a +b +c+ d}}
console.log(JSON.stringify(obj))

//texto virando obj
console.log(JSON.parse('{"a": 1, "b":2, "c": 3}'))// todo nome de atribuito em JSON entre ""
console.log(JSON.parse('{"a": 1, "b":"string", "c": true, "d": {}} '))