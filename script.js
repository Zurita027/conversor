function converter() {
    var temperaturaCelsius = parseFloat(document.getElementById("tempCelsius").value);
    if (!isNaN(temperaturaCelsius)) {
        var temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
        document.getElementById("resultado").innerHTML =temperaturaFahrenheit.toFixed(2) + "°F";
    } else {
        document.getElementById("resultado").innerHTML = "Por favor, insira um valor numérico válido para a temperatura.";
    }
}