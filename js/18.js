function Calcular(){
	let numero1 = parseFloat(document.querySelector("#numero1").value);
	let numero2 = parseFloat(document.querySelector("#numero2").value);
	let total = 0;
	let positivoNegativo = "", parImpar = "";

if(document.querySelector("#adicao").checked == true){
	total = numero1 + numero2;
}else if(document.querySelector("#subtracao").checked == true){
	total = numero1 - numero2;
}else if(document.querySelector("#multiplicacao").checked == true){
	total = numero1 * numero2;
}else if(document.querySelector("#divisao").checked == true){
	total = numero1 / numero2;
}

if(total % 2 == 0){
	parImpar = "Par";
}else{
	parImpar = "Ímpar";
}

if(total >= 0){
	positivoNegativo = "Positivo";
}else{
	positivoNegativo = "Negativo";
}

	document.querySelector("#resposta").innerHTML = "Resultado: " + total + "<br>";
	document.querySelector("#resposta").innerHTML += parImpar + "<br>";
	document.querySelector("#resposta").innerHTML += positivoNegativo;
}