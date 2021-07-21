//função anonima, recebe este nome porque não tem nome a função, ela é dentro de uma variável.

const raizquadrada = function (n){
    return n ** 0.5;
};
console.log(raizquadrada(9));

/* Arrow function: Os parênteses, que é por onde a função recebe os argumentos (assim como na function tradicional);
A “seta” => - responsável pelo nome “arrow” function;
E as chaves: o bloco de código que representa o corpo da função.*/

const raizquad = (n) => {
    return n ** 0.5;
};
console.log(raizquad(15));

// Arrow function reduzida:
const raiz = n => n ** 0.5;
console.log(raiz(18));