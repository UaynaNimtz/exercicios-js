function MaiorNumero(){
	let numero1 = parseFloat(document.querySelector("#numero1").value);
	let numero2 = parseFloat(document.querySelector("#numero2").value);
	let numero3 = parseFloat(document.querySelector("#numero3").value);
	let maiorNumero = 0;

	if(numero1 > numero2 && numero1 > numero3){
		maiorNumero = numero1;
	}else if((numero2 > numero1) && (numero2 > numero3)){
		maiorNumero = numero2;
	}else{
		maiorNumero = numero3
	}
	
	document.querySelector("#resposta").innerHTML = "O maior número é: " + maiorNumero;
}