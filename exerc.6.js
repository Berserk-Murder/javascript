function verificar() {
    const idade = parseInt(document.getElementById('idade').value)

    if (idade < 16)
        document.getElementById("result").innerHTML = "NÃO ELEITOR";
    if (idade >= 16)
        document.getElementById("result").innerHTML = "Eleitor FACULTATIVO";
    if (idade >= 18)
        document.getElementById("result").innerHTML = "Eleitor OBRIGATÓRIO";
    if (idade > 65)
        document.getElementById("result").innerHTML = " Eleitor FACULTATIVO"
}

document.getElementById('idade').innerHTML = verificar.toFixed(2);