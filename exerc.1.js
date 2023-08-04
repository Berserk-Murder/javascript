function idadeDirecao() {
  const number = parseFloat(document.getElementById("number").value);
  document.getElementById("result").innerHTML = number;
    if(number >= 0) {
        document.getElementById("result").innerHTML = "Este número é POSITIVO"; 
    } if(number < 0) {
        document.getElementById("result").innerHTML = "Este número é NEGATIVO"; 
    }
}

function limpar() {
    document.getElementById("result").innerHTML = "idadeDirecao";
}