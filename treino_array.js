 //Array usa-se colchetes [] separando por virgula dentro e são indexados por elementos
 const alunos = ['tadeu', "mariinha", "joaninha", "catarina", "pedro", 'tati', 'rey', 'mira', 'moro', 'suzana'];
 console.log(alunos);

 //saber tamanho do array
 console.log(alunos.length); 

 // editar array
 alunos[0] = 'joao cesar';

 //adicionar elemento, mas precisa saber o tamanho do array e o indice dele
 alunos[3] = 'luiza'

 //adicionar elemento sem saber o indice
 alunos.push('otavio');
 console.log(alunos);
 console.log(alunos.length);

 //remover elementos do array do final
 alunos.pop()
 //para guardar o elemento removido faça
 const removidos = alunos.pop()

 //remover o elemento do array do começo
 alunos.shift();
 const removido = alunos.shift();

 //remover e manter o elemento vazio no local
 delete alunos[1];   //vai aparecer <empty item> no lugar do indice

 //se quiser saber de uma posição que não existe o js vai te retornar undefined
console.log(alunos[50]);

//fatiar array pegar o elemento 0 até o 2 por exemplo
console.log(alunos.slice(0, 3));




 
