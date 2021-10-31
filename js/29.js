function GerarTabuada(){
	let tabuada = document.querySelector("#tabuada").value;
	let inicio = document.querySelector("#inicio").value;
	let fim = document.querySelector("#fim").value;

	if(fim < inicio){
		document.querySelector("#resposta").innerHTML = "O número final não pode ser menor que o inicial";
	}	return;

document.querySelector("#resposta").innerHTML = "Vou montar a tabuada de " + tabuada + "começando em " + inicio +" e terminando em " + fim + ":<br>";
for (let i = inicio; i <= fim; i++){
	document.querySelector("#resposta").innerHTML += i + " X " + tabuada + " = " + (tabuada * i) + "<br>";
}

}