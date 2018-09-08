
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
    if(campo.value == 0 ) {
        alert("Digite um valor válido");
    }else {
    alert(total);
}
}

