document.getElementById("ej10").querySelector("#calcular").addEventListener("click", function () {

    let capital = parseFloat(document.getElementById("capital").value);
    let tasa = parseFloat(document.getElementById("tasa").value);
    let resultado = document
      .getElementById("ej10")
      .querySelector("#resultado");

    if (isNaN(capital) || isNaN(tasa)) {
        resultado.textContent = "Ingrese valores válidos";
        return;
    }

    function calcularInteres(c, t) {
        return (c * t) / 100;
    }

    let interes = calcularInteres(capital, tasa);

    resultado.textContent =
      "Interés generado en un año: " + interes;
});
