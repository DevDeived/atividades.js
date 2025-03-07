// Crie um array usuarios contendo três objetos com nome, idade e email. Percorra a lista e exiba uma mensagem para cada usuário no seguinte formato:

// Saída esperada:
// "O usuário [nome], de [idade] anos, pode ser contatado pelo e-mail [email]."
let usuarios = [
  {
    nome: "Deived",
    idade: 23,
    email: "deivedlichela@gmail.com"
  },
  {
    nome: "Lucas",
    idade: 43,
    email: "lucas@email.com"
  },
  {
    nome: "Ana",
    idade: 32,
    email:"ana32@yahoo.com.br"
  }
]

// Se você precisa apenas percorrer o array e fazer alguma ação (exibir no console, alterar um elemento), use .forEach().

// Se você precisa modificar os valores do array e criar um novo array, use .map().

usuarios.forEach((usuario) => {
  console.log(
    `O usuario ${usuario.nome}, de ${usuario.idade} anos, pode ser contactado pelo e-mail ${usuario.email}.`
  );
});
