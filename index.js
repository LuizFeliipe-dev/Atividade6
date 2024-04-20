import Estudante from "./models/student.model.js";

const estudante = new Estudante(
    "João",
    "j@j.com",
    "123456", 
    "Engenharia", 
    [
        'Matemática',
        'História', 
        'Português'
    ]
);

const estudante2 = new Estudante(
    "Maria",
    "m@m.com",
    "123456",
    "Farmácia",
    [
        'Português',
        'Biomecanica',
        'Química'
    ]
);

const estudantes = [estudante, estudante2];

for(let i = 0; i < estudantes.length; i++){
    console.log(`A primeira disciplina de ${estudantes[i].nome} ` + 
    `é ${estudantes[i].retornaPrimeiraDisciplina()} e` + 
    `a última é ${estudantes[i].retornaUltimaDisciplina()}`);
}