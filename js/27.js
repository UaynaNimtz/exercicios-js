function MontarTabelaDePreco(){
	let precoUnitario = document.querySelector("#preco").value;
	document.querySelector("#resposta").innerHTML = "";
	for (let i = 1; i <= 50; i++){
		document.querySelector("#resposta").innerHTML += i + " - R$ " + (precoUnitario * i) + "<br>";
	}
}