function idadeDirecao() {
    const idade = parseFloat(document.getElementById("idade").value);
    const posseY = document.getElementById("yes");
    const posseN = document.getElementById("no");
    let idadeDirecao;
    if (idade >= 18 && posseY.checked) {
        document.getElementById("result").innerHTML = "Você PODE dirigir!";
    }
    else {
        document.getElementById("result").innerHTML = "Você NÃO PODE dirigir!"
    }
    if (idade < 18 && posseY.checked) {
        document.getElementById("result").innerHTML = "Quem você pensa que está enganando?";
}
}
    function limpar() {
        document.getElementById("result").innerHTML = ""
    }