
let compra= document.getElementById('compra');

let pagina=document.getElementById('pagina').classList;
let comprando=document.getElementById('comprando').classList;
let result=document.getElementById('result').classList;
let resultado=document.getElementById('resumen_button');
const tipo_de_entrada=document.getElementById('inputState').value;
let cantidad=document.getElementById('cantidad').value;
let datos=document.getElementById('datos').classList;



function compraT(){
    pagina.add("compratick")
    comprando.remove("compratick")
}


document.getElementById("boton_comprar1").addEventListener('click', compraT)
document.getElementById("boton_comprar2").addEventListener('click', compraT)
document.getElementById("boton_comprar3").addEventListener('click', compraT)
compra.addEventListener("click", compraT)

resultado.addEventListener("click", resumen)

function resumen(){
    result.remove("compratick");
    datos.add('compratick');
    if (document.getElementById('inputState').value==1){
        document.getElementById('total').innerHTML=200*0.2*document.getElementById('cantidad').value;
    } else if(document.getElementById('inputState').value==2){
        document.getElementById('total').innerHTML=200*0.5*document.getElementById('cantidad').value;
    } else {
        document.getElementById('total').innerHTML=200*0.85*document.getElementById('cantidad').value;
    }
    resultado.addClass('disabled');
    
}

let confirmacion=document.getElementById('confirmacion');
let volver_atras=document.getElementById("volver_atras");
volver_atras.addEventListener("click", reload());