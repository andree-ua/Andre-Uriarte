document.getElementById("calcular").addEventListener("click", function () {
    const n1 = parseFloat(document.getElementById("numero1").value);
    const n2 = parseFloat(document.getElementById("numero2").value);
    const operacion = document.getElementById("operacion").value;

    let resultado;

    if (isNaN(n1) || isNaN(n2)) {
        resultado = "Por favor ingresa números válidos.";
    } else {
        switch (operacion) {
            case "suma":
                resultado = n1 + n2;
                break;
            case "resta":
                resultado = n1 - n2;
                break;
            case "multiplicacion":
                resultado = n1 * n2;
                break;
            case "division":
                if (n2 === 0) {
                    resultado = "No se puede dividir entre 0";
                } else {
                    resultado = n1 / n2;
                }
                break;
        }
    }

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
});
