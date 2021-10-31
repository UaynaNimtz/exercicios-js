function Soma (){
	let n1 = document.querySelector("#numero1").value;
	let n2 = document.querySelector("#numero2").value;
	let total = parseFloat(n1) + parseFloat(n2);

	document.querySelector("#resposta").innerHTML = "Resultado:  " + total;
}