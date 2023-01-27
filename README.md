# revisao-js
Exercícios de JavaScript:

1) Escreva uma função que recebe um array como parâmetro e retorne este array invertido. Obs: evite o uso da função reverse().

2) Escreva uma função que recebe um array de números e retorna um array com os números pares elevados a 2.

3) Escreva uma função que, recebendo um número N como parâmetro, retorne os N primeiros números pares (por exemplo, se N for 3, você deve imprimir 0, 2 e 4; se N for 5, deve retornar 0, 2, 4, 6 e 8). 

4) Em todos os itens deste exercício, você terá que escrever uma **função** cuja entrada seja um **array**. Para testes, considere: `const array = [1, 2, 3, 4, 5, 6]`.

a) Escreva uma função que **retorne** um array com as entradas multiplicadas por 2. Isto é `[2, 4, 6, 8, 10, 12]`.

b) Escreva uma função que **retorne** um array com as entradas multiplicadas por 2 e como strings. Isto é: `["2", "4", "6", "8", "10", "12"]`

c) Escreva uma função que **retorne** um array de strings dizendo: "${número} é par/impar". Isto é: `["1 é impar", "2 é par", "3 é impar", "4 é par", "5 é impar", "6 é par"]`

5) Imagine que você trabalhe num parque de diversões, como desenvolvedor(a). As suas tarefas são sempre com o intuito de ajudar a automação de alguns processos internos do parque. Uma das atrações principais dele é a montanha russa do terror. As filas são muito grandes e todas as pessoas de várias idades insistem entrar no brinquedo, mesmo sabendo que não podem. Considere, então, essas pessoas:

```
const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

```

A regra para entrar na montanha russa do terror é: ter, no mínimo, 1.5m de altura; ser mais velho do que 14 anos e mais novo do que 60 anos.

a) Escreva uma **função** que **receba** este array e **devolva** outro array somente com as pessoas que **tem permissão para entrar** no brinquedo

b) Escreva uma **função** que **receba** este array e **devolva** outro array somente com as pessoas que **não podem entrar** no brinquedo.

6) Você foi contratado por um escritório médico para organizar a agenda de consultas

```jsx
const consultas = [
  { nome: "João", dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", dataDaConsulta: "02/07/2021" },
  { nome: "Paula", dataDaConsulta: "03/11/2021" },
  { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
]

```

A) A sua primeira tarefa é criar uma função que receba o **array** consultas como parâmetro e retorne um **array de consultas ordenado pelos nomes dos pacientes (em ordem alfabética)**