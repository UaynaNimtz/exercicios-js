function CriarTurmas(){
	let quantidadeCd = parseFloat(document.querySelector("#quantidadeCd").value);

	document.querySelector("#campos").innerHTML = "";
	for (let i = 1; i <= quantidadeCd; i++) {
		document.querySelector("#campos").innerHTML += "Preço do cd nº"+ i +" <input type='number' id='cd"+ i +"'><br>";
		}
}

function CalcularPrecoMedio(){
	let quantidadeCd = parseFloat(document.querySelector("#quantidadeCd").value);
	let total = 0, media = 0;
	document.querySelector("#resposta").innerHTML = "";
	for (let i = 1; i <=  quantidadeCd; i++) {
		total += parseFloat(document.querySelector("#cd"+i).value);
	}

media = total / quantidadeCd;
document.querySelector("#resposta").innerHTML = "Preço médio por CD: " + media ;
}