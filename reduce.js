
/*Array de objetos*/
const pets = [
    {
    nome: "rex",
    tipo: "cachorro",
    idade: 10,
    peso: 7
},
{
    nome: "miau",
    tipo: "gato",
    idade: 2,
    peso: 4
},
{
    nome: "gup",
    tipo: "peixe",
    idade: 1,
    peso:0.5
},
{
    nome: "gupa",
    tipo: "peixe",
    idade: 2,
    peso:0.7
}
]

//Reduce: somar todas idades de animais, ele sempre começa com 0
const somasIdade = pets.reduce((valoracumulado, animais) => {
    return valoracumulado + animais.idade
}, 0) 
console.log(somasIdade);

//Retornar a soma só dos peixes
const somaTotal = pets.reduce((valoracumulado, animais) => {
    if (animais.tipo !== 'peixe') return valoracumulado
    //se for igual a peixe cai aqui no de baixo
    return valoracumulado + animais.peso
},0)
console.log(somaTotal)