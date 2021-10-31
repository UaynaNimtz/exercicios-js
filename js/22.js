function Contar(){
	let inicio = parseFloat(document.querySelector("#inicio").value);
	let fim = parseFloat(document.querySelector("#fim").value);
	let total = 0;

	document.querySelector("#resposta").innerHTML = "";
	for (let i = inicio; i <= fim; i++){
		document.querySelector("#resposta").innerHTML += i + "<br>";
		total += i;
	}

	document.querySelector("#resposta").innerHTML += "Soma: " + total;
}