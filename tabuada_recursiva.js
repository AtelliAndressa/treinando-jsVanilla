function tabuada(multiplicador, num =1){
    if(num >= 10){
        console.log(`${multiplicador} x ${num} = ${num*multiplicador}`);
    } else {
        console.log(`${multiplicador} x ${num} = ${num*multiplicador}`);
        tabuada(multiplicador, num + 1);
    }
}

tabuada(5);