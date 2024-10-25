function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.innerHTML = '<span class="alerta">Por favor, insira valores válidos para peso e altura.</span>';
        return;
    }

    const imc = peso / (altura * altura);
    resultado.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong> (${classificarIMC(imc)})`;
}

function classificarIMC(imc) {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc < 24.9) return 'Peso normal';
    if (imc < 29.9) return 'Sobrepeso';
    if (imc < 34.9) return 'Obesidade grau 1';
    if (imc < 39.9) return 'Obesidade grau 2';
    return 'Obesidade grau 3';
}

function limpar() {
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultado').innerHTML = '';
}