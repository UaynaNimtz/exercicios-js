function Mensagem(){
	let periodo = document.querySelector("#periodo").value;
	let mensagem = "";

	if(periodo == "m"){
		mensagem = "Bom dia";
	}else if(periodo == "v"){
		mensagem = "Boa tarde";
	}else if(periodo == "n"){
		mensagem = "Boa noite";
	}else{
		mensagem = " - ";
	}

	document.querySelector("#resposta").innerHTML = mensagem;
}