// Captura o formulário
var formIMC = document.getElementById("form-imc");

// Captura os inputs
var inputNome = document.getElementById("nome");
var inputAltura = document.getElementById("altura");
var inputPeso = document.getElementById("peso");

// Captura a div para exibir o resultado
var divResultado = document.getElementById("resultado");

// Adiciona o evento de submit ao formulário
formIMC.addEventListener("submit", function (event) {
	event.preventDefault()

	// Captura os valores dos inputs
	var nome = inputNome.value.trim();
	var altura = inputAltura.value.trim().replace(",", ".");
	var peso = inputPeso.value.trim().replace(",", ".");

	// Verifica se os valores são numéricos e maiores que zero
	if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
		divResultado.innerHTML = "Altura e peso devem ser números maiores que zero.";
		return;
	}

	// Calcula o IMC
	var imc = peso / (altura * altura);

	// Verifica a faixa de peso ideal
	var faixaIdeal = "";
	if (imc < 18.5) {
		faixaIdeal = "Abaixo do peso";
	} else if (imc >= 18.5 && imc <= 24.9) {
		faixaIdeal = "Peso normal";
	} else if (imc >= 25 && imc <= 29.9) {
		faixaIdeal = "Sobrepeso";
	} else if (imc >= 30 && imc <= 34.9) {
		faixaIdeal = "Obesidade grau 1";
	} else if (imc >= 35 && imc <= 39.9) {
		faixaIdeal = "Obesidade grau 2";
	} else {
		faixaIdeal = "Obesidade grau 3";
	}

	// Exibe o resultado
	divResultado.innerHTML = nome + ", seu IMC é " + imc.toFixed(2) + " kg/m², o que significa que você está na faixa: " + faixaIdeal;
});

// Adiciona o evento de click ao botão Limpar
formIMC.addEventListener("reset", function (event) {
	divResultado.innerHTML = "";
});