const Professor = require("./classe/professor");

const prof = new Professor("Carlos", 40, "123.456.789-00", "Matemática", "Exatas");

console.log(prof.seApresentar());
console.log(prof.darAula());
console.log(prof.verificarDepartamento());


prof.setDisciplina("Física");
prof.setDepartamento("Ciências");
console.log(prof.darAula());
console.log(prof.verificarDepartamento());























//const Pessoa = require('./classe/pessoa')
//const Aluno = require ('./classe/Aluno')

//let aluno1 = new Aluno ('Samuel' , 19, '123456789')

//console.log(aluno1);

//let maria = new Pessoa ('Maria', 18);

//console.log(maria.idade);
//console.log(maria.seApresentar());