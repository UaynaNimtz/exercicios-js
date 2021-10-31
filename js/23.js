function GerarTabuada(){
	let numero = parseFloat(document.querySelector("#numero").value);

	document.querySelector("#resposta").innerHTML = "Tabuada do " + numero + "<br>";
	for (let i = 1; i <= 10; i++){
		document.querySelector("#resposta").innerHTML += i + " X " + numero + " = " + (numero * i) + "<br>";
	}
}