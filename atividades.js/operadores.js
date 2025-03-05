// Peça ao usuário dois números e realize as quatro operações matemáticas básicas (soma, subtração, multiplicação e divisão). Exiba os resultados no console.
let numero1 = 16;
let numero2 = 8;
let soma = numero1 + numero2;
let sub = numero1 - numero2;
let mult = numero1 * numero2;
let divisao = numero1 / numero2;

console.log("soma", soma);
console.log("sub", sub);
console.log("mult", mult);
console.log("divisao", divisao);

// Peça ao usuário um número e exiba no console o seu quadrado.
let number = 5
let quadrado = number**2

console.log("quadrado", quadrado);

// Peça ao usuário três números e exiba a média deles no console.
let a = 5;
let b = 6;
let c = 7;
let media = (a + b + c)/2;

console.log("media", media);
// Peça ao usuário a base e a altura de um retângulo e exiba sua área no console.
let base = 2;
let altura = 5;
let area = (base * altura)/2;

console.log("area", area);
// Peça ao usuário o raio de um círculo e calcule seu perímetro (2 * π * raio).
let raio = 5;
const π = 3.14;
let perimetro = 2 * π * raio;

console.log("perimetro é", perimetro);
// Peça ao usuário uma temperatura em Celsius e converta para Fahrenheit.
let celsius = 100;
let fahrenheit = (celsius * 9/5) + 32;
console.log(`A temperatura em Fahrenheit é: ${fahrenheit}°F`);
// Peça ao usuário o valor total da compra e o valor pago. Exiba o troco.
let valorCompra = 96.00;
let valorPago = 100.00;
let troco = valorPago - valorCompra;

console.log("troco", troco);