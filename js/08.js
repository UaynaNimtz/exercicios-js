function MaiorNumero(){
	let n1 = document.querySelector("#numero1").value;
	let n2 = document.querySelector("#numero2").value;
	let maiorNumero =0;
	
	if(n1 > n2){
		maiorNumero = n1;
	}else{
		maiorNumero = n2;
	}

	document.querySelector("#resposta").innerHTML += "Maior número " + maiorNumero;
}