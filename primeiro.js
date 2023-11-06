function main()
{
 var num = parseInt(document.getElementById("num").value);
 var resp = document.getElementById("resposta");
 
 if(document.getElementById("CtoF").checked==true)
  resp.innerHTML = ctof(num);
 if(document.getElementById("FtoC").checked==true)
  resp.innerHTML = ftoc(num);
}
function ctof(x)
{
 return (1.8*x + 32);
}

function ftoc(x)
{

 return ( (x-32)*5/9 );
}

function calcularArea(comprimento, altura) {
    var area = comprimento * altura;
    console.log(area);
}

calcularArea(10, 6); // chamando a função com valores como argumentos

var comprimento_retangulo = 10;
var altura_retangulo = 6;