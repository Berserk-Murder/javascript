function calculaPesoIdeal() {
    const height = parseFloat(document.getElementById("height").value);
    const gender = document.getElementById("masc").value;

    let pesoIdeal;
    if (gender === "M") {
        pesoIdeal = 72.7 * height - 58;
    } else if (gender === "F") {
        pesoIdeal = 62.1 * height - 44;
    }

    document.getElementById("result").innerHTML = pesoIdeal;
}