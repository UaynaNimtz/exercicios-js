function calcularMulta(){
	let peso = document.querySelector("#peso").value;
	let limite = 50;
	let valorMultaUnidade = 4;
	let excesso = peso - limite;
	let valorTotalMulta = excesso * valorMultaUnidade;
	
	document.querySelector("#resposta").innerHTML = "<b>Kilos excecidos:</b> " + excesso;
	document.querySelector("#resposta").innerHTML += "<br><b>Valor multa:</b> R$ " + valorTotalMulta;
}