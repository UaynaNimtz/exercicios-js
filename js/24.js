function CriarTurmas(){
	let quantidadeTurmas = parseFloat(document.querySelector("#turmas").value);

	document.querySelector("#campos").innerHTML = "";
	for (let i = 1; i <= quantidadeTurmas; i++){
		document.querySelector("#campos").innerHTML += "Quantidade de alunos da turma "+ i +" <input type='number' id='turma"+ i +"'><br>";
		}
}

function CalcularMediaAlunos(){
	let quantidadeTurmas = parseFloat(document.querySelector("#turmas").value);
	let total = 0, media = 0;
	document.querySelector("#resposta").innerHTML = "";
	for (let i = 1; i <=  quantidadeTurmas; i++) {
		total += parseFloat(document.querySelector("#turma"+i).value);
	}

media = total / quantidadeTurmas;
document.querySelector("#resposta").innerHTML = "Média de alunos: " + media ;
}