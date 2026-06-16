const botao = document.getElementById("btnCalcular");

botao.addEventListener("click", function () {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(num1) || isNaN(num2)) {
        resultado.textContent = "Digite os dois números.";
        return;
    }

    resultado.textContent = `Resultado: ${num1 * num2}`;
});