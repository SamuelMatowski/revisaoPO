class Pessoa {
    nome;
    idade;

    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    seApresentar(){
        return `Olá, eu sou o ${this.nome} e tenho ${this.idade} anos.`
    }
}
module.exports = Pessoa