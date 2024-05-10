const pessoa = {
     nome: "Dione",
     sobrenome: "Silva",
     idade: 23,
     profissao: "programador"
};

// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome;
// let idade = pessoa.idade;
// let profissao = pessoa.profissao;

// Destructuring Assignment

let { nome, sobrenome, idade, profissao } = pessoa;

console.log(nome);