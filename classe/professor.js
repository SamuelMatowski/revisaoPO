const Pessoa = require("./pessoa");

class Professor extends Pessoa {
    #disciplina;
    #departamento;

    constructor(nome, idade, cpf, disciplina, departamento) {
        super(nome, idade, cpf);
        this.#disciplina = disciplina;
        this.#departamento = departamento;
    }

    // getters/setters no estilo da sua classe Pessoa
    getDisciplina() { return this.#disciplina; }
    setDisciplina(d) { this.#disciplina = d; }

    getDepartamento() { return this.#departamento; }
    setDepartamento(dep) { this.#departamento = dep; }

    darAula() {
        return `A aula de ${this.#disciplina} começou.`;
    }

    verificarDepartamento() {
        return `O professor ${this.nome} pertence ao departamento de ${this.#departamento}.`;
    }
}

module.exports = Professor;
