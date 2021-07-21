function realizarCompra() {
    const menu = [{
        id: '1',
        especificacao: 'Cachorro Quente',
        preco: 4
    },
    {
        id: '2',
        especificacao: 'X-salada',
        preco: 4.5
    },
    {
        id:'3',
        especificacao: 'X-bacon',
        preco: 5

    },
    {
        id: '4',
        especificacao: 'Torrada simples',
        preco: 2
    },
    {
        id: '5',
        especificacao: 'Refrigerante',
        preco: 1.5
    }
    ];

    let qtdItem1 = parseInt(document.getElementById("quantidade1").value);
    let qtdItem2 = parseInt(document.getElementById("quantidade2").value);
    let qtdItem3 = parseInt(document.getElementById("quantidade3").value);
    let qtdItem4 = parseInt(document.getElementById("quantidade4").value);
    let qtdItem5 = parseInt(document.getElementById("quantidade5").value);

    // Criando varíaveis que irão receber o valor do input e zerando elas para que não haja erro na soma
    let valorparcial1 = 0;
    let valorparcial2 = 0;
    let valorparcial3 = 0;
    let valorparcial4 = 0;
    let valorparcial5 = 0;
    let total = 0;

    //verificação do Item 1
    if (qtdItem1 > 0 && !isNaN(qtdItem1)) {
        valorparcial1 = menu[0].preco * qtdItem1;
        document.getElementById("displayItem1").innerHTML = `${qtdItem1} - ${menu[0].especificacao} - R$ ${valorparcial1.toFixed(2)}`;
    }

    //verificação do Item 2
    if (qtdItem2 > 0 && !isNaN(qtdItem2)) {
        valorparcial2 = menu[1].preco * qtdItem2;
        document.getElementById("displayItem2").innerHTML = `${qtdItem2} - ${menu[1].especificacao} - R$ ${valorparcial2.toFixed(2)}`;
    }
    //verificação do Item 3
    if (qtdItem3 > 0 && !isNaN(qtdItem3)) {
        valorparcial3 = menu[2].preco * qtdItem3;
        document.getElementById("displayItem3").innerHTML = `${qtdItem3} - ${menu[2].especificacao} - R$ ${valorparcial3.toFixed(2)}`;
    }
    //verificação do Item 4
    if (qtdItem4 > 0 && !isNaN(qtdItem4)) {
        valorparcial4 = menu[3].preco * qtdItem4;
        document.getElementById("displayItem4").innerHTML = `${qtdItem4} - ${menu[3].especificacao} - R$ ${valorparcial4.toFixed(2)}`;
    }
    //verificação do Item 5
    if (qtdItem5 > 0 && !isNaN(qtdItem5)) {
        valorparcial5 = menu[4].preco * qtdItem5;
        document.getElementById("displayItem5").innerHTML = `${qtdItem5} - ${menu[4].especificacao} - R$ ${valorparcial5.toFixed(2)}`;
    }


    //Somatória do Total
    total = valorparcial1 + valorparcial2 + valorparcial3 + valorparcial4 + valorparcial5 ;

    //Display da compra
    document.getElementById("totalCompra").innerHTML = `TOTAL A PAGAR - R$ ${total.toFixed(2)}`;
    document.getElementById("finalizar").style.display = 'block';
    document.getElementById("menu").style.display = 'none';

}


/*
function resetar() {
    document.getElementById("displayItem1").innerHTML = "";
    document.getElementById("displayItem2").innerHTML = "";
    document.getElementById("totalCompra").innerHTML = "";
    document.getElementById("qtd_cod1").value = "";
    document.getElementById("qtd_cod2").value = "";
    document.getElementById("valorCompra").style.display = 'none';
    document.getElementById("tabelaPrecos").style.display = 'block';
} */