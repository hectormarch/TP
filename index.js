
let compra= document.getElementById('compra');

let pagina_compra=document.getElementById('pagina').classList;
let comprando=document.getElementById('comprando').classList;
let result=document.getElementById('result').classList;
let resultado=document.getElementById('resumen_button');
const tipo_de_entrada=document.getElementById('inputState').value;
let cantidad=document.getElementById('cantidad').value;


function compraT(){
    pagina_compra.add("compratick")
    comprando.remove("compratick")
}

compra.addEventListener("click", compraT)

resultado.addEventListener("click", resumen)

function resumen(){
    comprando.add("compratick")
    result.remove("compratick")
    if (document.getElementById('inputState').value==1){
        document.getElementById('valor').innerHTML=200*0.2*document.getElementById('cantidad').value;
    } else if(document.getElementById('inputState').value==2){
        document.getElementById('valor').innerHTML=200*0.5*document.getElementById('cantidad').value;
    } else {
        document.getElementById('valor').innerHTML=200*0.85*document.getElementById('cantidad').value;
    }

}