function verificar() {
  const palavra = document.getElementById('palavra').value.toLowerCase();
  const inversa = palavra.split('').reverse().join('');

  document.getElementById('result').innerHTML = inversa

if (palavra == inversa) {
  document.getElementById("result").innerHTML = "A palavra É um PALÍNDROMO"
} else {
  document.getElementById("result").innerHTML = "A palavra NÃO É um PALÍNDROMO"

}
}
function limpar() {
  document.getElementById('result').innerHTML = "";
}