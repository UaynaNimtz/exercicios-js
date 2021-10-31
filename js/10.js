function VerificarTamanho(){
	let tamanho = document.querySelector("#tamanho").value;
	let tamanhoTexto = "";
	
	if(tamanho.toUpperCase() == "G"){
		tamanhoTexto = "G - Grande";
	}else if(tamanho.toUpperCase() == "M"){
		tamanhoTexto = "M - Média";
	}else if(tamanho.toUpperCase() == "P"){
		tamanhoTexto = "P - Pequena";
	}else{
		tamanhoTexto = "Tamanho inválido";
	}

	document.querySelector("#resposta").innerHTML = "Tamanho selecionado: " + tamanhoTexto;
}