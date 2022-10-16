
let compra= document.getElementById('compra');

let pagina_compra=document.getElementById('pagina').classList;
let comprando=document.getElementById('comprando').classList;


function compraT(){
    pagina_compra.add("compratick")
    comprando.remove("compratick")
}

compra.addEventListener("click", compraT)

