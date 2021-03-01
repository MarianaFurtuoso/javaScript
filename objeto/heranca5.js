console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// Aqui criamos novo comportamentos

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function () {
    return this[0]
}


String.prototype.toString = function () {// aqui estamos substituindo a string algo que deve-se evitar!!
    return 'Lascou tudo' 
}

console.log('Escola Cod3r'.reserve())