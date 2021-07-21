//filter cria um novo array com todos elementos que passaram no teste da função fornecida
const pets = [
    {
    nome: "rex",
    tipo: "cachorro",
    idade: 10
},
{
    nome: "miau",
    tipo: "gato",
    idade: 2
},
{
    nome: "gup",
    tipo: "peixe",
    idade: 1
}
]

console.log(pets);
/**************************************************************************************** */
//filtrar animais de menos de 5 anos, vai gerar uma copia só com os elementos filtrados:
const newpets = pets.filter((pet) => {
    return pet.idade < 5
})
console.log(newpets);
/**************************************************************************************** */

//Map traz a mesma quantidade de elementos que o array original
const petnames = pets.map((animais) => {
    return animais.nome
})
console.log(petnames);


//***************************************************************************************** */
//Foreach  não retorna array, para retornar tem que ser assim:
const foreachPetNames = []
pets.forEach((animais) => {
    foreachPetNames.push(animais.nome)
})
console.log(foreachPetNames);