
let compra= document.getElementById('compra');

let pagina=document.getElementById('pagina').classList;
let comprando=document.getElementById('comprando').classList;
let result=document.getElementById('result').classList;
let resultado=document.getElementById('resumen_button');
const tipo_de_entrada=document.getElementById('inputState').value;
let cantidad=document.getElementById('cantidad').value;


function compraT(){
    pagina.add("compratick")
    comprando.remove("compratick")
}


compra.addEventListener("click", compraT)

resultado.addEventListener("click", resumen)

function resumen(){
    comprando.add("compratick")
    result.remove("compratick")
    if (document.getElementById('inputState').value==1){
        document.getElementById('total').innerHTML=200*0.2*document.getElementById('cantidad').value;
    } else if(document.getElementById('inputState').value==2){
        document.getElementById('total').innerHTML=200*0.5*document.getElementById('cantidad').value;
    } else {
        document.getElementById('total').innerHTML=200*0.85*document.getElementById('cantidad').value;
    }
    resultado.addClass('disabled')

}