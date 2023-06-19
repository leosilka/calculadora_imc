const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");
const valorIdade = document.getElementById("idade");
const valorSpan = document.getElementById("valor_idade");
const nomeInput = document.getElementById("nome");
const btnCalculoImc = document.getElementById("btnCalcularImc");
const resultadoImc = document.getElementById("resultado_imc");

function calculoImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificacaoImc(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso! Seu I.M.C esta em " + imc.toFixed(2);
    } else if (imc >= 18.5 && imc <= 25) {
        return "Peso normal!  Seu I.M.C esta em " + imc.toFixed(2);
    } else if (imc > 25 && imc <= 30) {
        return "Acima do peso! Seu I.M.C esta em " + imc.toFixed(2);
    } else if (imc > 30 && imc <= 40) {
        return "Obeso! Seu I.M.C esta em " + imc.toFixed(2);
    } else {
        return "Obesidade grave! Seu I.M.C esta em " + imc.toFixed(2);
    }
}

valorIdade.addEventListener('input', function() {
    const valorSelecionado = valorIdade.value;
    valorSpan.textContent = valorSelecionado;
})

btnCalculoImc.addEventListener("click", function(event) {
    event.preventDefault();
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);
    const imc = calculoImc(peso, altura);
    const classificacao = classificacaoImc(imc)
    resultadoImc.textContent = classificacao;
})