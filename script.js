
//inserir numero

function insert(num) {
  var numero = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = numero + num
}


function limpar() {
    document.getElementById('resultado').innerHTML = "";
}

function voltar() {
    var resultado = document.getElementById('resultado').innerHTML;
    //substring - lê o comprimento do resultado e diminui 1
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}


function calcular (){
    var resultado = document.getElementById('resultado').innerHTML;

    if(resultado){
     document.getElementById('resultado').innerHTML = eval(resultado)  

    }else {
        document.getElementById('resultado').innerHTML + 'Insira um Número'
    }
}


