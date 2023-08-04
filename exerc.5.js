function calculaPesoIdeal() {
    const height = parseFloat(document.getElementById("height").value);
    const genderM = document.getElementById("masc");
    const genderF = document.getElementById("fem");
    let pesoIdeal;
    if (genderM.checked) {
        pesoIdeal = 72.7 * height - 58;
    } if (genderF.checked) {
        pesoIdeal = 62.1 * height - 44;
    }

    document.getElementById("result").innerHTML = pesoIdeal.toFixed(2);

    function limpar() {
        document.getElementById("result").innerHTML = ""
    }
}