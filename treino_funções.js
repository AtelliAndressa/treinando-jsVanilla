// função pode receber um parametro ou não, se usar return nada depois dele é executado.
function saudacao(nome){
    console.log('olá ' + nome);
    return `Hello ${nome}`;
}

//tem que chamar a função para ser executada pelo seu nome 
saudacao(' João');
saudacao(' maria');

//podemos jogar o resultado dentro de uma variavel
const resultado = saudacao(' Luiz')
console.log(resultado);

function soma(x,y){
    const resultado = x + y;
    return resultado;
}

console.log(soma(2,3));
console.log(soma(5,4));
