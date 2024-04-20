export default class Estudante{
    constructor(nome, email, ra, curso, diciplinas) {
        this.nome = nome;
        this.email = email;
        this.ra = ra;
        this.curso = curso;
        this.diciplinas = diciplinas;
    }


    retornaPrimeiraDisciplina(){
        return this.diciplinas[0];
    }

    retornaUltimaDisciplina(){
        return this.diciplinas[this.diciplinas.length - 1];
    }
}