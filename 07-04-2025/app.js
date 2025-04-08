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


const alunos = [
    { id: 1, nome: "Mariana", idade: 17, role: "teacher" },
    { id: 2, nome: "Carlos", idade: 14, role: "student" },
    { id: 3, nome: "Ana", idade: 22, role: "student" },
    { id: 4, nome: "João", idade: 15, role: "teacher" },
    { id: 5, nome: "Fernanda", idade: 19, role: "student" },
    { id: 6, nome: "Lucas", idade: 16, role: "teacher" },
    { id: 7, nome: "Raquel", idade: 20, role: "student" },
    { id: 8, nome: "Gustavo", idade: 13, role: "teacher" },
    { id: 9, nome: "Isabela", idade: 18, role: "student" },
    { id: 10, nome: "Ricardo", idade: 17, role: "student" },
    { id: 11, nome: "Prof. Silva", idade: 40, role: "teacher" },
    { id: 12, nome: "Prof. Oliveira", idade: 35, role: "teacher" }
];

function retornStudentsOrTeachers(alunos, role) {
    for (let index = 0; index < alunos.length; index++) {
       if(alunos[index].role === role)
        console.log(alunos[index].nome)
    }
}

retornStudentsOrTeachers(alunos, "teacher")