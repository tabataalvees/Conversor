function ce(){
    var dolar = document.querySelector('#do');
var libra = document.querySelector('#li');
    if (dolar.checked){
        var resultado = parseFloat(document.getElementById('valor-box').value) * 5.52;
      document.getElementById('rodape').innerHTML = resultado
    }else if (libra.checked) {
      var resultado = parseFloat(document.getElementById('valor-box').value) * 7.59;
     document.getElementById('fim').innerHTML = resultado 
    }
    }