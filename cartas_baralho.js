class Carta {
    constructor(_numero, _naipe) {
      this.numero = _numero;
      this.naipe = _naipe;
    }
  
    proximo() {
      let proxima_carta = "";
      switch (this.numero) {
        case "Ás":
          proxima_carta = `2 de ${this.naipe} `;
          break;
        case "K":
          proxima_carta = `Ás de ${this.naipe} `;
          break;
        case "Q":
          proxima_carta = `K de ${this.naipe} `;
          break;
        case "J":
          proxima_carta = `Q de ${this.naipe} `;
          break;
        case 10:
          proxima_carta = `J de ${this.naipe} `;
          break;
        default:
          proxima_carta = `${this.numero + 1} de ${this.naipe} `;
          break;
      }
      return proxima_carta;
    }
  
    anterior() {
      let carta_anterior = "";
      switch (this.numero) {
        case "Ás":
          carta_anterior = `K de ${this.naipe} `;
          break;
        case "K":
          carta_anterior = `Q de ${this.naipe} `;
          break;
        case "Q":
          carta_anterior = `J de ${this.naipe} `;
          break;
        case "J":
          carta_anterior = `10 de ${this.naipe} `;
          break;
        case 2:
          carta_anterior = `Ás de ${this.naipe} `;
          break;
        default:
          carta_anterior = `${this.numero - 1} de ${this.naipe} `;
          break;
      }
      return carta_anterior;
    }
  
  }
  
  function montaBaralho() {
    const naipes = ["Ouros", "Paus", "Copas", "Espadas"];
    const cartas = ["Ás", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    const baralho = [];
  
    for (let i = 0; i < naipes.length; i++) {
      for (let j = 0; j < cartas.length; j++) {
        let carta = new Carta(cartas[j], naipes[i]);
        baralho.push(carta);
      }
    }
  
    return baralho;
  }
  
  const baralho = montaBaralho();
  console.log(baralho);
  