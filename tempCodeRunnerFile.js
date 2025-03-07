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