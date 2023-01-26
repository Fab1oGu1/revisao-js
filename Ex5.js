const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]


const permitidos = pessoas.filter((permissao) => {
	return permissao.idade > 14 && permissao.idade < 60;
}).filter((alt) => {
	return alt.altura >= 1.5;
})

const naoPermitidos = pessoas.filter((barrados) => {
	return barrados.idade <= 14 || barrados.idade >= 60 || barrados.altura < 1.5;
})

console.log(permitidos);
console.log(naoPermitidos);