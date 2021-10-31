function AdicionarProduto(){
	let produto = document.querySelector("#produto").value;
	let preco = document.querySelector("#preco").value;
	document.querySelector("#lista-produto").innerHTML += "<li>" + produto + ": R$ " + preco;
	CalcularTotal(preco);
}

function CalcularTotal(valor){
	let total = parseFloat(document.querySelector("#total").value);
	if(total > 0){
		document.querySelector("#total").value = total + parseFloat(valor);
	}else{
		document.querySelector("#total").value = valor;
	}
}

function CalcularTroco(){
	let total = parseFloat(document.querySelector("#total").value);
	let dinheiro = parseFloat(document.querySelector("#dinheiro").value);
	let troco = dinheiro - total;
	document.querySelector("#troco").value = troco;
}