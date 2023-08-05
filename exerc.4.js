function palin(pal){
    var palindroma = true;
    pal = pal.toUpperCase();
  
    for(var i = 0; i < (pal.length / 2); i++){
      if(pal.charAt(i) != pal.charAt(pal.length - i - 1)){
        palindroma = false;
      }
    }
	
    return palindroma;
  }
  
  var palavra
  if(palin(palavra)){
    document.getElementById("palavra").innerHTML = "Esta palavra é palindroma";
  }
  else{
    alert("Esta palavra NÃO é palindroma"); 
  }

function limpar() {
    document.getElementById("result").innerHTML = "idadeDirecao";
}