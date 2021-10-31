function CalcularSalario(){
	let salarioBruto = document.querySelector("#salario-bruto").value;
	let inss = salarioBruto * 8 / 100;
	let ir = salarioBruto * 11 / 100;
	let sindicato = salarioBruto * 5 / 100;
	let descontos = inss + ir + sindicato;
	let salarioLiquido = salarioBruto - descontos;
	
	document.querySelector("#resposta").innerHTML = "<b>IR:</b> R$ " + ir + "<br>";
	document.querySelector("#resposta").innerHTML = "<b>INSS:</b> R$ " + inss + "<br>";
	document.querySelector("#resposta").innerHTML = "<b>Sindicato:</b> R$ " + sindicato + "<br>";
	document.querySelector("#resposta").innerHTML += "<br><b>Salário Líquido:</b> R$ " + salarioLiquido;
}