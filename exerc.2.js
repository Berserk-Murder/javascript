function idadeDirecao() {
  const age = parseFloat(document.getElementById("age").value);
  document.getElementById("result").innerHTML = age;
    if(age >= 18) {
        document.getElementById("result").innerHTML = "Você PODE dirigir!"; 
    } if(age < 18) {
        document.getElementById("result").innerHTML = "Você NÃO PODE dirigir!"; 
    }
}

function limpar() {
    document.getElementById("result").innerHTML = "idadeDirecao";
}