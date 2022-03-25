let nome = prompt("Qual seu nome?");
let idade = prompt("Qual sua idade?");
let linguagem = prompt("Qual a liguagem de programação que você está aprendendo?");
let gostar = prompt("Você gosta de aprender " + linguagem + "?");
let teste = true;

rodaPrograma();

if (teste === false) {
	
	nome = prompt("Qual seu nome?");
	idade = prompt("Qual sua idade?");
	linguagem = prompt("Qual a liguagem de programação que você está aprendendo?");
	gostar = prompt("Você gosta de aprender " + linguagem + "?");
//	teste = true;
	rodaPrograma();
} 

function gostaDeAprender(){
	
	if (gostar == "sim" || gostar == "s" || gostar == "S" || gostar == "Sim" || gostar == "SIM") {
	adicionarEuGosto();
		teste = true;
	} else if (gostar == "não" || gostar == "n" || gostar == "N" || gostar == "Não" || gostar == "NÃO" || gostar == "nao" || gostar == "NAO") {
	adicionarNaoGosto();
	teste = true;
	} else {
	dizerSimOuNao();
	teste = false;
	}
}

function adicionarNome(){
	let fraseNome = "<p> Meu nome é " + nome + ".</p>";
	let elementoFraseNome = document.getElementById("nome");
	elementoFraseNome.innerHTML = fraseNome;
}

function adicionarIdade(){
	let fraseIdade = "<p>Eu tenho " + idade +" anos.</p>";
	let elementoFraseIdade = document.getElementById("idade");
	elementoFraseIdade.innerHTML = fraseIdade;
}

function adicionarLinguagem(){
	let fraseLinguagem = "<p>Estou aprendendo " + linguagem + ".</p>";
	let elementoFraseLinguagem = document.getElementById("linguagem");
	elementoFraseLinguagem.innerHTML = fraseLinguagem;
}

function adicionarEuGosto(){
	let fraseEuGosto = "<p>Muito bom! Continue estudando e você terá muito sucesso.</p>";
	let elementoFraseEuGosto = document.getElementById("gosta-ou-nao");
	elementoFraseEuGosto.innerHTML = fraseEuGosto;
}
function adicionarNaoGosto(){
	let fraseNaoGosto = "<p>Ahh que pena... Já tentou aprender outras linguagens?</p>";
	let elementoFraseNaoGosto = document.getElementById("gosta-ou-nao");
	elementoFraseNaoGosto.innerHTML = fraseNaoGosto;
}
function dizerSimOuNao(){
 alert("Você precisa dizer sim ou não.")
}

function rodaPrograma(){
adicionarNome();
adicionarIdade();
adicionarLinguagem();
gostaDeAprender();
}