const pessoa = require('./pessoa.js');

class Aluno extends pessoa {

    matricula;

    constructor(nome,idade,matricula){
        super(nome,idade)
        this.matricula = matricula
    }

    estudar() {
        return `${this.nome} está estudando`;
    }
}
module.exports = Aluno;