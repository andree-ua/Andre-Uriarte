document.getElementById("ej7").querySelector("#calcular").addEventListener("click", function () {

    let largo = parseFloat(document.getElementById("largo").value);
    let ancho = parseFloat(document.getElementById("ancho").value);
    let resultado = document
      .getElementById("ej7")
      .querySelector("#resultado");

    if (isNaN(largo) || isNaN(ancho)) {
        resultado.textContent = "Ingrese valores válidos";
        return;
    }

    function calcularArea(l, a) {
        return l * a;
    }

    function calcularPerimetro(l, a) {
        return 2 * l + 2 * a;
    }

    let area = calcularArea(largo, ancho);
    let perimetro = calcularPerimetro(largo, ancho);

    resultado.textContent =
      "Área: " + area + " | Perímetro: " + perimetro;
});
