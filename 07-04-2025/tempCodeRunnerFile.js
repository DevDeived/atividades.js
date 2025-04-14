function contarCaracteres(string, char) {
  let contador = 0;
  for (let index = 0; index < string.length; index++) {
   if(string[index] === char) {
    contador++
   }
    return contador
  }
}
console.log(contarCaracteres("Banana", 'a'));
console.log(contarCaracteres("Arara", 'r'));
