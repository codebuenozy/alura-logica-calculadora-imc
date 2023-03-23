var nomeInformado;
var alturaInformada;
var pesoInformado;
var imcCalculado;

function calculaImc(altura, peso) {

    return peso / (altura * altura);
}

function fazCalculo() {

    nomeInformado = prompt("Informe seu Nome:");

    do {
        const input = prompt("Informe sua altura (em metros):");
        const alturaComPonto = input.replace(",", ".");
        alturaInformada = parseFloat(alturaComPonto);

        if (isNaN(alturaInformada)) {
            alert(`"${input}" não é uma altura válida. Por favor, insira um valor numérico com ponto decimal.`);
        }
    } while (isNaN(alturaInformada));

    pesoInformado = prompt("Informe seu peso (em Kg):");

    imcCalculado = Math.round(calculaImc(alturaInformada, pesoInformado));

    function verificarPesoIdeal(imc) {
        if (imc < 18.5) {
            return " e você está abaixo do peso ideal";
        } else if (imc >= 18.5 && imc < 25) {
            return " e você está no peso ideal";
        } else if (imc >= 25 && imc < 30) {
            return " e você está com sobrepeso!";
        } else {
            return " e você está obeso! Cuide-se!!!";
        }
    }

    alert("Olá " + nomeInformado + ", O seu IMC calculado é " + imcCalculado + verificarPesoIdeal(imcCalculado));

}