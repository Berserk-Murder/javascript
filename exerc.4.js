function verificar() {
  const palavra = document.getElementById('palavra').value.toLowerCase();
  if (palavra == '') {
    document.getElementById('result').innerHTML = "Null"
  }
  else {
  const inversa = palavra.split('').reverse().join('');

  if (palavra == inversa) {
    document.getElementById("result").innerHTML = "A palavra É um PALÍNDROMO"
  } else {
    document.getElementById("result").innerHTML = "A palavra NÃO É um PALÍNDROMO"
  }
  }
}
function limpar() {
  document.getElementById('result').innerHTML = "";
}