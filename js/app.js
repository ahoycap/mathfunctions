
function cloose() {
    var clse = document.getElementById("dez");
    clse.classList.add("nodisplay");
} 

function firstOp() {
   var fop = document.getElementById("dez");
   fop.classList.remove("nodisplay");
}

function tenpc() {
    var campo = document.getElementById("campo");
    var total = campo.value * 0.1;
    var arredondado = total.toFixed(2);
    event.preventDefault();

    if(campo.value > 0 || campo.value < 0) {
        document.getElementById("resposta").innerHTML = arredondado;
    }else{
        document.getElementById("resposta").innerHTML = "Digite apenas números";
    }  
}

