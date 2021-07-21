{// objeto com atributos dentro e seus valores e função interna
const pessoa = {
    nome: "Luiz",
    sobrenome: "jose",
    idade: 34,

    fala (){
        console.log (`${this.nome} ${this.sobrenome} ${this.idade} está falando oi.`);
    },

    incrementaIdade (){
        ++this.idade;
    }
};

pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();

//função para criar objetos
function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa ('Luiz', 'Otavio', 34);
const pessoa2 = criaPessoa ('jose', 'Otavio', 34);
const pessoa3 = criaPessoa ('maria', 'Otavio', 34);
console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);}