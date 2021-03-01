const escola = [{  // const escola é uma array de objetos
    nome: 'Turma M1',
    alunos: [{
        nome: 'Guilherme',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebecca',
        nota: 8.9
    }, {
        nome: 'Maria',
        nota: 7.2
    }]
}]

const getNotaDoAluno = a => a.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

//Criando metodo para unir os dois pq não existe

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)