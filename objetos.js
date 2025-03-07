// Crie um objeto endereco com as propriedades rua, cidade e estado. Utilize uma template string para retornar um endereço formatado no seguinte formato:

// Saída esperada:
// "Eu moro na rua [rua], na cidade de [cidade], estado de [estado]."
let endereco = {
  rua: "Raimundo Candido",
  cidade: "Cascavel",
  estado: "Ceará"
}
console.log(`Eu moro na rua ${endereco.rua}, na cidade de ${endereco.cidade}, estado do ${endereco.estado}.`)

// Crie um objeto produto com as propriedades nome, preco e quantidade. Use uma template string para retornar uma frase informando o preço total do estoque.

// Saída esperada:
// "O produto [nome] custa R$[preco] e temos [quantidade] unidades em estoque. O total de estoque é R$[preco * quantidade]."
let produto = {
  nome: "café",
  preco: 20,
  quantidade: 100,
};
let precoTotalDoEstoque = produto.preco * produto.quantidade;

console.log(
  `O produto ${produto.nome} custa R$ ${produto.preco} e temos ${produto.quantidade} unidades em estoque. O total de estoque é R$ ${precoTotalDoEstoque}.`
);
// Crie um objeto carro com as propriedades marca, modelo e ano. Utilize uma template string para retornar uma frase no formato:

// Saída esperada:
// "O carro [marca] [modelo] foi fabricado no ano [ano]."
let carro = {
  marca: "Ford",
  modelo: "Ka",
  ano: 2017,
};
console.log(
  `O carro ${carro.marca} ${carro.modelo} foi fabricado no ano ${carro.ano}.`
);
// Crie um objeto aluno com as propriedades nome, curso e notaFinal. Retorne uma frase informando o status de aprovação do aluno (notaFinal maior ou igual a 7 significa aprovado).

// Saída esperada:
// "O aluno [nome] cursa [curso] e está [aprovado/reprovado] com nota final de [notaFinal]."
let aluno = {
  nome: "Davi",
  curso: "Fullstack",
  notaFinal: 8
};

  let status;
  if (aluno.notaFinal >= 7) {
    status = "Aprovado";
  }else{
    status = "Reprovado";
  }

  console.log(`O aluno ${aluno.nome} cursa ${aluno.curso} e está ${status} com nota final de ${aluno.notaFinal}.`);

// Crie um array usuarios contendo três objetos com nome, idade e email. Percorra a lista e exiba uma mensagem para cada usuário no seguinte formato:

// Saída esperada:
// "O usuário [nome], de [idade] anos, pode ser contatado pelo e-mail [email]."
let usuarios = [
  {
    nome: "Deived"
  },
  {
    idade: 43
  },
  {
    email:"david.fisica@yahoo.com.br"
  }
]
console.log(`O usuario ${usuarios[0].nome}, de ${usuarios[1].idade} anos, pode ser contactado pelo e-mail ${usuarios[2].email}.`)
// Crie um array listaCompras contendo objetos com as propriedades item e preco. Percorra a lista e exiba uma mensagem no formato:

// Saída esperada:
// "O item [item] custa R$[preco]."
let listasCompras = [
  {
    item: "azeite"
  },
  {
    preco: 47.00
  }
]
console.log(`O item ${listasCompras[0].item} custa R$ ${listasCompras[1].preco}.`)