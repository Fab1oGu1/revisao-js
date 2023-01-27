const consultas = [
    { nome: "João", dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", dataDaConsulta: "02/07/2021" },
    { nome: "Paula", dataDaConsulta: "03/11/2021" },
    { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
  ]


  consultas.sort(function (a, b) {
    return a.nome.localeCompare(b.nome);
});

console.log(consultas);