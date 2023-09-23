function Soma() {
    var numberUm = parseInt(document.getElementById("valor1").value);
    var numberDois = parseInt(document.getElementById("valor2").value);
    document.getElementById("res").innerHTML =
        "Resposta: " + (numberUm + numberDois);
}

function Subitração() {
    var numberUm = parseInt(document.getElementById("valor1").value);
    var numberDois = parseInt(document.getElementById("valor2").value);
    document.getElementById("res").innerHTML =
        "Resposta: " + (numberUm - numberDois);
}

function Multiplicação() {
    var numberUm = parseInt(document.getElementById("valor1").value);
    var numberDois = parseInt(document.getElementById("valor2").value);
    document.getElementById("res").innerHTML =
        "Resposta: " + (numberUm * numberDois);
}

function Divisão() {
    var numberUm = parseInt(document.getElementById("valor1").value);
    var numberDois = parseInt(document.getElementById("valor2").value);
    document.getElementById("res").innerHTML =
        "Resposta: " + (numberUm / numberDois);
}