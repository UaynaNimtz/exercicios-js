function Media (){
	let nota1 = document.querySelector("#nota1").value;
	let nota2 = document.querySelector("#nota2").value;
	let nota3 = document.querySelector("#nota3").value;
	let nota4 = document.querySelector("#nota4").value;
	let total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)/4;

	document.querySelector("#resposta").innerHTML = "Média:  " + total;
}