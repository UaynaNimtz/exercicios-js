function VerificarMedia(){
	let media = document.querySelector("#media").value;
	let mensagem = "";
	
	if(media == 10){
		mensagem = "Aprovado com Distinção";
	}else if(media >= 7 ){
		mensagem = "Aprovado";
	}else if(media < 7 ){
		mensagem = "Reprovado";
	}
	
	document.querySelector("#resposta").innerHTML = mensagem;
}