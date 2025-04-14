// 2. Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:

//     A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
//     A mensagem "Reprovado", se a média for menor do que sete;
//     A mensagem "Aprovado com Distinção", se a média for igual a dez.
// const readline  = require("readline-sync");

// let nota1 = Number(readline.question("Informe a Primeira nota do Aluno: "));
// let nota2 = Number(readline.question("Informe a Segunda nota do aluno: "));
// let mediaDoAluno = (nota1 + nota2) / 2;

// if (mediaDoAluno === 10) {
//   console.log("Aprovado com Distinção!");
// }else if (mediaDoAluno >= 7) {
//   console.log("Aprovado");
// }else {
//   console.log("Reprovado!")
// }

// console.log(`Media Do Aluno: ${mediaDoAluno}`);

// const numero = Number(prompt("Digite um número:"));

// if (numero > 0) {
//   console.log("O número é positivo.");
// } else if (numero < 0) {
//   console.log("O número é negativo.");
// } else {
//   console.log("O número é zero.");
// }
// const readline  = require("readline-sync");

// let idade = Number(readline.question("Digite uma idade: "));

// if (idade >= 0 && idade <= 12) {
//   console.log("Você é uma criança");
// } else if (idade >= 13 && idade <= 17) {
//   console.log("Você é um adolescente");
// } else if (idade >= 18 && idade <= 64) {
//   console.log("Você é um adulto")
// } else if (idade >= 65) {
//   console.log("Você é um idoso")
// } else {
//   console.log("Idade invalida")
// }

// console.log(`Sua idade é ${idade}`)



// const usuarioAdm = "Admin";
// const senhaCorreta = "1234";

// const usuario = prompt("Digite seu usuario:");
// const senha = prompt("Digite sua senha:");

// if (usuario === usuarioAdm && senha === senhaCorreta) {
//   console.log("Login Bem-Sucedido");
// } else {
//   console.log("Usuario ou Senha incorretos.");
// }


const numero = Number(prompt("Digite um número:"));

if (numero % 2 === 0) {
  document.write("O número é par.");
} else {
  document.write("O número é ímpar.");
}