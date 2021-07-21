class Animal{

	constructor(_especie,_nome,_ano){
  	this.especie = _especie;
    this.nome = _nome;
    this.ano = _ano;
  }
  
  setNome(_nome){
  	if(typeof(this.nome) != "undefined"){
    	return false;
    }else{
  		this.nome = _nome;
    	return true;
    }
  }
  
  getIdadeNoAnoX(_ano){
  	if(_ano < this.ano){
    	return "Não havia nascido";
    }else{
    	return _ano - this.ano;
    }  	
  }

}

let cachorro = new Animal();

console.log(cachorro.getIdadeNoAnoX(2001));

if(cachorro.setNome("Lulu")){
	console.log("Lulu ganhou um nome");
}else{
	console.log("Esse cachorro já tem nome");
}