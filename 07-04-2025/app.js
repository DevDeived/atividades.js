// //* função Normal
// function returnSum(a, b) {
//    let sum = a + b
//    console.log(sum)
// }

// //* Eron fuction
// const returnSub = (a, b) => {
//     let sub = a - b
//     console.log(sub)
// }

// returnSum(10, 20);
// returnSub(300, 209);

// function returnSum(a, b) {
//     let sum = a + b
//     return sum
//  }

//  returnSum(10, 20)
//  console.log(sum)

// Crie uma função que exiba uma mensagem de boas-vindas ao usuário quando a pagina for carregada. utilize essa função para persolanizar a experiência de cada usuario.

// function welcome(nome) {
//     console.log(`Bem vindo, ${nome}!!!`)
// }

// welcome("Deived")

//* Desenvolva uma funcao que receba um número como paramentro e verifique se ele é par ou impar. Retorne true se for par e false se for impar.

// function parOuImpar(numero) {
//     if(numero %2 === 0) {
//         console.log("Número é Par")
//         console.log(true)
//     } else {
//         console.log("Número é Impar")
//         console.log(false)
//     }
// }

// parOuImpar(20)
// parOuImpar(31)

//*Implemente uma função que calcule a média aritmética de um array de um número e retorne o resultado: Utilize essa função para calcular a média de diferentes conjuntos de numeros.

// let array = [23, 45, 25, 5452, 4255, 657]
// let array2 = [39,34, 54, 30, 9787, 3877]

// function returnMediumValue(array) {
//     let soma = 0
//     for (let index = 0; index < array.length; index++){
//         soma = array[index] + soma
//     }

//     let media = soma / array.length
//     console.log(`Media: ${media.toFixed(2)}`)
// }

// returnMediumValue(array)
// returnMediumValue(array2)

//* Crie uma função que receba uma string como parametro e retorne a mesma string com todas as letras em caixa alta. utilize ess função para converter diferentes strings.

// function convertToUppercase(palavra) {
//     let palavraUpperCase = palavra.toUpperCase()
//     console.log(palavraUpperCase)
// }
// convertToUppercase("Oi Som!!!")

// let array = [2, 34, 522, 5423, 34232]

// function mediaArray(batatinha) {
//     let soma = 0
//     for (let index = 0; index < batatinha.length; index++) {
//        soma = soma + batatinha[index]
//     }
//     let media = soma / batatinha.length
//     console.log(media.toFixed(2))
// }

// mediaArray(array)

// função que retorne um nome especifico de uma lista

// let nomes = ["alice", "Bob", "Carlos", "Diana", "Eduardo", "Fernanda"];

// function returnIfNamesISPresent(nomes, nome) {
//     for (let index = 0; index < nomes.length; index++) {
//         if(nome.toLowerCase() === nomes[index].toLowerCase()) {
//             console.log(true)
//             return
//         }

//     }
//     console.log(false)
// }
// returnIfNamesISPresent(nomes, "bob")

// const pessoas = [
//     {nome: 'Ana', idade: 18},
//     {nome: 'Carlos', idade: 16},
//     {nome: 'Beatriz', idade: 15},
//     {nome: 'Diego', idade: 40},
//     {nome: 'Eduarda', idade: 31}
// ];

// function retonarNomesMaioresDeIdade(pessoas) {
//     for (let index = 0; index < pessoas.length; index++) {
//        if (pessoas[index].idade >=18) {
//         console.log(pessoas[index].nome)
//        }

//     }
// }

// retonarNomesMaioresDeIdade(pessoas)

// const alunos = [
//     { id: 1, nome: "Mariana", idade: 17, role: "teacher" },
//     { id: 2, nome: "Carlos", idade: 14, role: "student" },
//     { id: 3, nome: "Ana", idade: 22, role: "student" },
//     { id: 4, nome: "João", idade: 15, role: "teacher" },
//     { id: 5, nome: "Fernanda", idade: 19, role: "student" },
//     { id: 6, nome: "Lucas", idade: 16, role: "teacher" },
//     { id: 7, nome: "Raquel", idade: 20, role: "student" },
//     { id: 8, nome: "Gustavo", idade: 13, role: "teacher" },
//     { id: 9, nome: "Isabela", idade: 18, role: "student" },
//     { id: 10, nome: "Ricardo", idade: 17, role: "student" },
//     { id: 11, nome: "Prof. Silva", idade: 40, role: "teacher" },
//     { id: 12, nome: "Prof. Oliveira", idade: 35, role: "teacher" }
// ];

// function retornStudentsOrTeachers(alunos, role) {
//     for (let index = 0; index < alunos.length; index++) {
//        if(alunos[index].role === role)
//         console.log(alunos[index].nome)
//     }
// }

// retornStudentsOrTeachers(alunos, "teacher")

                  //* ATIVIDADES PROPOSTAS PARA CASA EM 07-04-2025 *//

// Crie uma função chamada saudacao que exibe uma mensagem de saudação no console. A mensagem deve ser "Olá, Mundo!".
function saudacao() {
    console.log("Olá, mundo!")
}

saudacao()

// - Função de saudação personalizada: Crie uma função chamada saudacaoPersonalizada que recebe um nome como parâmetro e exibe no console a mensagem: "Olá, [nome]!". Teste a função com diferentes nomes.
function saudacaoPersonalizada(nome) {
    console.log(`Olá, ${nome}!`)
}

saudacaoPersonalizada("Elias")
// - Crie uma função chamada concatenar que recebe dois parâmetros, sendo um string e um número, e retorna uma string com a concatenação desses dois parâmetros.
function concatenar(texto, numero) {
    return texto + numero
}
console.log(concatenar("Idade: ", 43))

// Escreva uma função chamada soma que aceita dois números como parâmetros e retorna a soma deles.

function soma(a, b) {
    return a + b
}
console.log(soma(2, 4))

// - Função de subtração: Crie uma função chamada subtrair que recebe dois parâmetros (números) e retorna a diferença entre eles.

function subtrair(a, b) {
    return a - b
}

console.log(subtrair(4, 2))

// - Função de multiplicação: Crie uma função chamada multiplicar que recebe dois parâmetros (números) e retorna o resultado da multiplicação desses números.

function multiplicar(a, b) {
    return a * b
}

console.log(multiplicar(2, 3))

// - Função de dividir e verificar erro: Crie uma função chamada dividir que recebe dois números como parâmetros. Ela deve retornar o resultado da divisão, mas, caso o divisor seja zero, deve retornar uma mensagem de erro dizendo: "Divisão por zero não é permitida".

function dividir(a, b) {
    if (b === 0) {
        return "Divisão por zero não é permitida! "
    }
    return a / b
}

console.log(dividir(10, 5))
console.log(dividir(8, 0))

// - Função de verificar se um número é par ou ímpar: Crie uma função chamada verificarParOuImpar que recebe um número como parâmetro e retorna uma mensagem dizendo se o número é "Par" ou "Ímpar".

function parOuImpar(numero) {
    if(numero %2 === 0) {
        console.log("O número é par")
    } else {
        console.log("O numero é Impar")
    }
}
console.log(parOuImpar(30))
console.log(parOuImpar(15))

// -Crie uma função chamada verificarMaioridade que recebe a idade de uma pessoa e retorna uma mensagem dizendo se ela é maior ou menor de idade. A maioridade é aos 18 anos.
function verificarMaioridade(idade) {
    if(idade >= 18) {
        console.log(`${idade}, maior de idade!`)
    } else {
        console.log(`${idade}, menor de idade!`)
    }
}

console.log(verificarMaioridade(18))
console.log(verificarMaioridade(16))

// Escreva uma função chamada maiorNumero que aceita três números como parâmetros e retorna o maior deles.

function maiorNumero(a, b, c) {
    return Math.max(a, b, c)
}

console.log(maiorNumero(5, 3, 10))
console.log(maiorNumero(15, -1, 3))

// Escreva uma função chamada calcularFatorial que aceita um número como parâmetro e retorna o fatorial desse número.
function calcularFatorial(numero) {
    let fatorial = 1
    for (let i = 2; i <= numero; i++) {
        fatorial *= i
    }
    return fatorial
}

console.log(calcularFatorial(5))
console.log(calcularFatorial(3))
console.log(calcularFatorial(6))

// Escreva uma função chamada contarVogais que aceita uma string como parâmetro e retorna o número de vogais na string.
function contarVogais(palavra) {
    const vogais = ['a', 'e', 'i', '0', 'u'];
    let contador = 0

for(let letra of palavra.toLowerCase()) {
    if (vogais.includes(letra)) {
        contador++
        }
    }
    return contador
}

console.log(contarVogais("Deived"))
console.log(contarVogais("Paralepipedo"))

function contarConsolantes(alfabeto) {
    const consoantes = ['b', 'c', 'd', 'f','g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
    let contador = 0

    for(let letras of alfabeto.toLowerCase()) {
        if(consoantes.includes(letras)) {
            contador++
        }
    }
    return contador
}

console.log(contarConsolantes("Deived"))
console.log(contarConsolantes("paralepipedo"))

// Escreva uma função chamada calcularMedia que aceita um array de números como parâmetro e retorna a média desses números.

function calcularMedia(array) {
  if (array.length === 0) return 0;

  let soma = 0
  for (let index = 0; index < array.length; index++) {
    soma += array[index]
    
  }
  return soma / array.length
}

const numeros =  [13, 5, 23, 30, 32, 15];
console.log(calcularMedia(numeros).toFixed(2));

// Escreva uma função chamada encontrarElemento que aceita um array e um valor como parâmetros, e retorna true se o valor estiver presente no array, e false caso contrário.

// Escreva uma função chamada calcularPotencia que aceita dois números como parâmetros e retorna o primeiro número elevado à potência do segundo número.

function calcularPotencia(a, b) {
  return a ** b
}

console.log(calcularPotencia(2, 3))

// Escreva uma função chamada contarCaracteres que aceita uma string e um caractere como parâmetros, e retorna o número de vezes que o caractere aparece na string.

function contarCaracteres(string, char) {
  let contador = 0;
  for (let index = 0; index < string.length; index++) {
   if(string[index] === char) {
    contador++
   }  
  }
  return contador
}
console.log(contarCaracteres("Banana", "a"));
console.log(contarCaracteres("Arara", "r"));

// Escreva uma função chamada filtrarPares que aceita um array de números como parâmetro e retorna um novo array contendo apenas os números pares do array original.

// Escreva uma função chamada somarArray que aceita um array de números como parâmetro e retorna a soma de todos os números do array.

// Escreva uma função chamada celsiusParaFahrenheit que aceita uma temperatura em graus Celsius como parâmetro e retorna essa temperatura convertida para graus Fahrenheit.

// Escreva uma função chamada calcularIMC que aceita o peso (em quilogramas) e a altura (em metros) de uma pessoa como parâmetros e retorna o Índice de Massa Corporal (IMC) dessa pessoa.

// -Crie uma função chamada calcularIMC que recebe o peso (em kg) e a altura (em metros) de uma pessoa e retorna o Índice de Massa Corporal (IMC).
// A função deve retornar uma string com a classificação do IMC, de acordo com o valor:

// Abaixo de 18.5: "Abaixo do peso"
// Entre 18.5 e 24.9: "Peso normal"
// Entre 25 e 29.9: "Sobrepeso"
// Entre 30 e 39.9: "Obesidade"
// Acima de 40: "Obesidade grave"

// Crie uma função que receba um parametro idade e verifique se uma pessoa pode dirigir com base na idade

// Escreva uma função que receba dois parametros e calcule a média de notas de alunos e atribuir um conceito exemplo (A,B,C)

// - Crie uma função chamada contaBancaria que simula uma conta bancária. Ela deve aceitar dois parâmetros: o saldo inicial da conta e uma ação ('depositar' ou 'sacar') e o valor a ser depositado ou retirado. A função deve retornar o novo saldo da conta após a ação.

// - Faca uma calculadora

// - Crie uma função chamada calcularDesconto que recebe o valor original de um produto e o percentual de desconto. A função deve retornar o valor com o desconto aplicado.

// - Crie uma função chamada converterTemperatura que converte a temperatura de Celsius para Fahrenheit e vice-versa. A função deve receber dois parâmetros: o valor da temperatura e a unidade de origem ('C' para Celsius ou 'F' para Fahrenheit). Ela deve retornar o valor convertido.

// - Crie uma função chamada filtrarMaioridade que recebe um array de objetos representando pessoas, cada uma com as propriedades nome e idade. Mostre as pessoas que são maiores de idade.
// const pessoas = [
//   { nome: 'Carlos', idade: 20 },
//   { nome: 'Ana', idade: 17 },
//   { nome: 'Bruna', idade: 22 },
//   { nome: 'Lucas', idade: 16 }
// ];

// - Crie uma função chamada buscarPessoaPorNome que recebe um array de objetos com as propriedades nome e idade, e um nome como parâmetro. A função deve retornar o objeto correspondente ao nome, ou uma mensagem dizendo que a pessoa não foi encontrada.

// - Crie uma função chamada somaIdades que recebe um array de objetos com as propriedades nome e idade, e retorna a soma de todas as idades

// -Crie uma função chamada contarAcimaDe30 que recebe um array de objetos representando pessoas (com as propriedades nome e idade) e retorna o número de pessoas que possuem mais de 30 anos.

// -Crie uma função chamada encontrarMaisVelho que recebe um array de objetos representando pessoas (com as propriedades nome e idade) e retorna o objeto da pessoa mais velha.

// - Crie uma função chamada contarNome que recebe um array de objetos representando pessoas (com as propriedades nome e idade) e um nome como parâmetro. A função deve retornar o número de vezes que esse nome aparece no array.
// const pessoas = [
//   { nome: 'Carlos', idade: 20 },
//   { nome: 'Ana', idade: 40 },
//   { nome: 'Carlos', idade: 35 },
//   { nome: 'Lucas', idade: 25 }
// ];

// - Função de calcular área do triângulo: Crie uma função chamada calcularAreaTriangulo que recebe a base e a altura de um triângulo e retorna a sua área. A fórmula da área de um triângulo é: Área = (base * altura) / 2.

// - Função de cálculo de fatorial: Crie uma função chamada calcularFatorial que recebe um número inteiro e retorna o fatorial desse número. Exemplo: 5! = 5 * 4 * 3 * 2 * 1.

// - Função de contar ocorrências de um valor em array: Crie uma função chamada contarOcorrencias que recebe um array de números e um número como parâmetro. A função deve contar quantas vezes esse número aparece no array.

// - Função de calcular o desconto em um produto: Crie uma função chamada calcularDescontoPorProduto que recebe o preço original de um produto e o percentual de desconto. A função deve retornar o preço com o desconto aplicado, mas desta vez, a função deve mostrar o valor do desconto e o novo preço.

// - Crie uma função chamada encontrarMaisAlto que recebe um array de objetos representando pessoas, com as propriedades nome e altura. A função deve percorrer o array e retornar o objeto da pessoa com a maior altura, utilizando um laço for.

// - Crie uma função chamada contarAcimaDe25 que recebe um array de objetos com as propriedades nome e idade e retorna o número de pessoas que têm mais de 25 anos, utilizando um laço for.

// - Crie uma função chamada converterTemperatura que converte a temperatura de Celsius para Fahrenheit e vice-versa. A função deve receber dois parâmetros: o valor da temperatura e a unidade de origem ('C' para Celsius ou 'F' para Fahrenheit). Ela deve retornar o valor convertido.
