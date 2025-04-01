//Estrutura de decisão 

// == compara valor
//=== comparava valor e  tipo da variável ou estritamente igual
//!= nega o valor
//!==estritamente diferente esta negando o valor e o tipo
// > maior
// < menor
// >= maior ou igual
// <= menor ou igual

// let numero1 = 21
// let numero2 = 10

// if (numero1>numero2) {
//     console.log("Numero 1 maior que o numero 2")
// } else {
//     console.log("Numero 2 maior que o numero 1")
// }

// let anoDeNascimento = 1993
// let idade = 2025 - anoDeNascimento

// if (idade>=16) {
//     console.log("Esse rapaz pode votar")
// } else {
//     console.log("Esse rapaz não pode votar")
// }

// let senha = "1234"

// if (senha==="1234") {
//     console.log("SENHA VÁLIDA")
// } else {
//     console.log("SENHA INVALIDA")
// }

// As maças custam R$ 0,30 cada se fosse compradas menos do que uma duzia, e R$0,25
// se forem compradasa pelo menos doze. Escreva um programa que leia o numero de maças
// compradas, calcule e escreva o valor total da compra.

// let numerosDeMacas = Number(prompt("Digite o numero de maças: "))

// if (numerosDeMacas<12) {
//     alert(`O valor total é de : ${numerosDeMacas*0.3}`)
// } else {
//     alert(`O valor total é de : ${numerosDeMacas*0.25}`)
// }

// Escreva um programa para ler 3 valores inteiros (considere que não serão lidos valores iguais)
// e escrevê-los em ordem crescente.

//https://professor.luzerna.ifc.edu.br/marcelo-cendron/wp-content/uploads/sites/40/2017/02/lista-exercicios-if-else.pdf


// let numero1 = 31
// let numero2 = 40
// let numero3 = 50
// if(numero1>numero2 && numero1>numero3 && numero2>numero3 ) {
//     console.log(`${numero1} > ${numero2} > ${numero3}`)
// } else if(numero2>numero1 && numero2>numero3 && numero1>numero3) {
//     console.log(`${numero2} > ${numero1} > ${numero3}`)
// } else if(numero2>numero3 && numero2 > numero1 && numero3>numero1) {
//     console.log(`${numero2} > ${numero3} > ${numero1}`)
// } else if(numero3>numero1 && numero1>numero2 && numero3>numero2) {
//     console.log(`${numero3} > ${numero1} > ${numero2}`)
// }else if(numero3>numero2 && numero3>numero1 && numero2>numero1) {
//     console.log(`${numero3} > ${numero2} > ${numero1}`)
// }else {
//     console(`${numero1} > ${numero3} > ${numero2}`)
// }

// Tendo	 como	 entrada	 a	 altura	 e	 o	 sexo	 (codificado	 da	 seguinte	 forma:	
//     1:feminino	 	 2:masculino)	 de	 uma	 pessoa,	 construa	 um	 programa	 que	
//     calcule	e	imprima	seu	peso	ideal,	utilizando	as	seguintes	
//     Fórmulas:	
//     - para	homens:	(72.7	*	Altura)	– 58	
//     - para	mulheres:	(62.1	*	Altura)	– 44.7	

// let genero = "F"
// let altura = 1.65

// if(genero === "F") {
//     let pesoIdealF = (62.1*altura)-44.7
//     console.log(`O peso ideal é : ${pesoIdealF}`)
// } else {
//     let pesoIdealM = (72.7*altura)-58
//     console.log(`O peso ideal é : ${pesoIdealM}`)
// }

