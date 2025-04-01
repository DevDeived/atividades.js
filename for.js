// LISTA

// Contagem Progressiva:

// Crie um loop que conta de 1 a 10 e imprima cada número no console.

    // for (let num = 1; num <= 10; num++) {
    //     console.log(num)
    // }

// Contagem Regressiva
    // for (let num = 10; num >= 1; num--) {
    //     console.log(num)
    // }

// Contagem de Números Pares

// Utilize um loop para imprimir todos os números pares de 0 a 20 no console.
    // for (let par = 0; par <=20; par +=2) {
    //     console.log(par)
    // }
    
// }

// Contagem de Números Ímpares

    // for (let impar = 1; impar <= 20; impar +=2) {
    //     console.log(impar)
    // }


// Utilize um loop para imprimir todos os números ímpares de 1 a 20 no console.

// Tabuada de um Número Específico

// let num = 9;

// for (let index = 1; index <=10; index++) {
//     console.log(`${index} x ${num} = ${index * num}`)
// }

// Crie um loop que imprime a tabuada do 5 (de 1 a 10) no console.
// let numero = 5

// for (let index = 1; index <= 10; index++) {
//     console.log(`${numero} x ${index} = ${numero * index}`)
// }

// Soma de Números


// Utilize um loop para somar todos os números de 1 a 100 e imprima o resultado no console.
// let soma = 0
// for (let index = 1; index <=100; index++) {
//     soma = soma + index
    
// }
// console.log(soma)

// Média de Números
// let numeros = [10, 15, 5, 0, 20]
// let soma = 0
// for (let i = 0; i < numeros.length; i++) {
   
//     soma += numeros[i];
// }

// let media = soma / numeros.length
// console.log(`A média é: ${media}`);


// Crie um loop que calcula a média de todos os números de 1 a 50 e imprima o resultado no console.
// let soma = 0

// for ( i = 1; i <= 50; i++){
//     soma += i
// }
// let media = soma / 50
// console.log(`A média é: ${media}`);


// Fatorial de um Número]
    // let numero = 5
    // let fatorial = 1
    // for (index = 1; index <= numero; index++) {
    //     fatorial = fatorial * index

    //     console.log(fatorial)
    // }
    

// Utilize um loop para calcular o fatorial de um número especificado e imprima o resultado no console.

// let numero = 6
// fatorial = 1

// for (index = 1; index <= numero; index++) {
//     fatorial *= index

// }
// console.log(fatorial)
// Soma de Números Pares
    // soma = 0
    // for (index = 0; index <= 20; index +=2) {
    //     soma += index
    // }
    // console.log(soma)

// Crie um loop que calcula a soma de todos os números pares de 1 a 50 e imprima o resultado no console.
// let soma = 0

// for (index = 0; index <= 50; index++){
//     if (index %2 ===0)
//     soma += index
// }

// console.log(soma)

// let soma = 0
//     for (let index = 1; index <= 100; index++) {
//         soma += index
       
//     }
//     console.log(soma)


// Cálculo de Potência

// let numero = 3;
// for (index = 1; index <= 10; index++) {
//     let potencia = numero ** index;  
//     console.log(`3 x ${index} = ${potencia}`);
// }

// Imprimir uma lista de nomes

// Dado um array de nomes, use for para imprimir cada nome.

// Imprimir um array de números
// Dado um array de números, use um laço for para imprimir todos os números.

// Somar elementos de um array
// Dado um array com os números [1, 2, 3], use um for para somar todos os números e imprimir o resultado.

// Imprimir os números de 10 a 1
// Use um for para imprimir os números de 10 a 1 em ordem decrescente.



//quando for multiplo de 3 mostre o mar, quando for de 4 mostre o menino e dos 2 marmenino

// for (let index = 1; index <= 100; index++) {
//     if (index %3===0 && index%4===0){
//         console.log(`marmenino ${index}`);
//     }
//     else if (index %3===0){
//         console.log(`mar ${index}`);
        
//     }
//     else if (index %4===0){
//         console.log(`menino ${index}`);
//     }
    
// }

    // for(let i = 1; i <= 10; i++) {
    //     for (let j = 1; j <= 10; j++)
    // {
    //     console.log(`${i} x ${j} = ${1 * j}`);
    // }}

    // contagem regressiva

    // // let array = [1, 2, 3, 4, 5]
    // for (let index = 0; index < array.length; index++) {
    //     console.log(index)
    // }

    // soma de números
    // let soma = 0
    // for (let index = 1; index <= 100; index++) {
    //     soma += index
       
    // }
    // console.log(soma)
    // Imprimir uma lista de nomes
// Dado um array de nomes, use for para imprimir cada nome.
// let array = ["maria","joao","ronaldo","romario"]

// for (index = 0; index < array.length; index++) {
//     console.log(array[index])
// }

// Imprimir um array de números
// Dado um array de números, use um laço for para imprimir todos os números.

// let numeros = [1, 2, 3, 4, 5, 6]

// for (index = 0; index < numeros.length; index++) {
//     console.log(numeros[index])
// }

// Somar elementos de um array
// Dado um array com os números [1, 2, 3], use um for para somar todos os números e imprimir o resultado.

// let soma = 0
// let array = [1, 2, 3]

// for (index = 0; index <= array.length; index++) {
//     soma += index
// }

// console.log(soma)


// Imprimir os números de 10 a 1
// Use um for para imprimir os números de 10 a 1 em ordem decrescente.
let numero
for ( index = 10; index>= 1; index--) {
    console.log(index)
}

// Quando for multiplo de 3 mostre o mar, quando for de 4 mostre o menino e dos 2 marmenino


// 2. Filtrar objetos pelo cargo "Student"
// Use um for para encontrar todos os objetos em que o role seja "Student" e imprima o nome dessas pessoas.

// Exemplo de saída:
// Joao
// Lucas1. Imprimir o nome de todos os objetos

// Use um laço for para imprimir o nome de cada pessoa no array arrayObj.
// Exemplo de saída:
// Elias
// Joao
// Lucas
// Jander
// Ander-som
// Jander
// Ander-som

// 3. Contar quantos objetos têm o cargo "Student"
// Crie um laço for que percorra o array e conte quantos objetos têm o cargo "Student". em js

// Exemplo de saída:
// 4

// 4. Imprimir apenas o id e role dos objetos
// Use um laço for para imprimir apenas o id e o role de cada objeto.

// let estudantes = [
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


// 5. Alterar o cargo de uma pessoa para "Teacher"
// Use um for para mudar o role de uma pessoa específica para "Teacher". Por exemplo, mude o cargo de "Joao" para "Teacher".

// Exemplo de saída após alteração:
// Joao agora tem o cargo de "Teacher".

// 6. Criar um novo array apenas com os nomes
// Use um for para criar um novo array contendo apenas os nomes das pessoas no array original.

// Exemplo de saída:
// ["Elias", "Joao", "Lucas", "Jander", "Ander-som"]


// let arrayNomes = []

// for (let index = 0; index < estudantes.length; index++) {
//   arrayNomes.push(estudantes[index].nome)
// }
// console.log(arrayNomes)

// 7. Verificar se existe uma pessoa com o nome "Lucas"
// Use um laço for para verificar se existe algum objeto com o nome "Lucas". Se existir, imprima "Encontrado".

// Exemplo de saída:
// Encontrado

// 8. Verificar a quantidade de pessoas com o nome "Student" e "Teacher"
// Crie um laço que conte quantas pessoas são "Student" e quantas são "Teacher" e imprima essa informação.

// Exemplo de saída:
// Estudantes: 4
// Professores: 1

// 9. Alterar o nome de "Ander-som" para "Anderson"
// Crie um laço for para modificar o nome da pessoa que tem o nome "Ander-som" para "Anderson".

// Exemplo de saída após alteração:
// O nome de "Ander-som" agora é "Anderson".

// 10. Imprimir o nome de quem tem o id 3
// Crie um laço for para procurar e imprimir o nome da pessoa com o id 3.

// let estudantes = [
//   { nome: "Mariana", idade: 17 },
//   { nome: "Carlos", idade: 14 },
//   { nome: "Ana", idade: 22 },
//   { nome: "João", idade: 15 },
//   { nome: "Fernanda", idade: 19 },
//   { nome: "Lucas", idade: 16 },
//   { nome: "Raquel", idade: 20 },
//   { nome: "Gustavo", idade: 13 },
//   { nome: "Isabela", idade: 18 },
//   { nome: "Ricardo", idade: 17 }
// ];

// Neste exercício, vamos verificar se os estudantes têm idade para votar (idade maior ou igual a 16 anos) e mostrar se eles estão ou não habilitados para votar.

// Neste exercício, vamos contar quantos estudantes estão em diferentes faixas etárias:

// Faixa 1: 13 a 17 anos
// Faixa 2: 18 a 25 anos
// Faixa 3: 26 a 35 anos
// Faixa 4: acima de 35 anos

// let alunos = [
//   { nome: "Mariana", notas: [7, 8, 6] },
//   { nome: "Carlos", notas: [4, 5, 3] },
//   { nome: "Ana", notas: [9, 8, 10] },
//   { nome: "João", notas: [5, 5, 5] },
//   { nome: "Fernanda", notas: [6, 7, 5] }
// ];

// Neste exercício, temos alunos com suas notas em várias matérias. A tarefa é calcular a média das notas de cada aluno e classificá-los como "Aprovado" (média >= 6) ou "Reprovado" (média < 6).


// Neste exercício, vamos contar quantos estudantes têm nota superior a 7 e exibir os nomes desses estudantes.




//  Encontrar a pessoa com a maior idade e imprimir o nome dela.

// let estudantes = [
//   { nome: "Mariana", idade: 17 },
//   { nome: "Carlos", idade: 14 },
//   { nome: "Ana", idade: 22 },
//   { nome: "João", idade: 15 },
//   { nome: "Fernanda", idade: 19 },
//   { nome: "Lucas", idade: 16 },
//   { nome: "Raquel", idade: 20 },
//   { nome: "Gustavo", idade: 13 },
//   { nome: "Isabela", idade: 18 },
//   { nome: "Ricardo", idade: 17 }
// ];

//  Encontrar a média das idades e imprimir quantos estudantes estão acima da média.
// let estudantes = [
//   { nome: "Mariana", idade: 17 },
//   { nome: "Carlos", idade: 14 },
//   { nome: "Ana", idade: 22 },
//   { nome: "João", idade: 15 },
//   { nome: "Fernanda", idade: 19 },
//   { nome: "Lucas", idade: 16 },
//   { nome: "Raquel", idade: 20 },
//   { nome: "Gustavo", idade: 13 },
//   { nome: "Isabela", idade: 18 },
//   { nome: "Ricardo", idade: 17 }
// ];

// Verificar se existe algum estudante que tem o nome começando com a letra "A".

// let estudantes = [
//   { nome: "Mariana", idade: 17 },
//   { nome: "Carlos", idade: 14 },
//   { nome: "Ana", idade: 22 },
//   { nome: "João", idade: 15 },
//   { nome: "Fernanda", idade: 19 },
//   { nome: "Lucas", idade: 16 },
//   { nome: "Raquel", idade: 20 },
//   { nome: "Gustavo", idade: 13 },
//   { nome: "Isabela", idade: 18 },
//   { nome: "Ricardo", idade: 17 }
// ];


// Agrupar estudantes por faixa etária.

// let estudantes = [
//   { nome: "Mariana", idade: 17 },
//   { nome: "Carlos", idade: 14 },
//   { nome: "Ana", idade: 22 },
//   { nome: "João", idade: 15 },
//   { nome: "Fernanda", idade: 19 },
//   { nome: "Lucas", idade: 16 },
//   { nome: "Raquel", idade: 20 },
//   { nome: "Gustavo", idade: 13 },
//   { nome: "Isabela", idade: 18 },
//   { nome: "Ricardo", idade: 17 }
// ];