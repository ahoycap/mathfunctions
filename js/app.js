
function firstOp() {
   var fop = document.getElementById("dez");
   fop.classList.remove("nodisplay");
}

function secondOp() {
    var sop = document.getElementById("xporcento");
    sop.classList.remove("nodisplay");
}

function thirdOp() {
    var top = document.getElementById("parouimpar");
    top.classList.remove("nodisplay");
}

function fourthOp() {
    var foop = document.getElementById("primeirograu");
    foop.classList.remove("nodisplay");
}

function fifthOp() {
    var fiop = document.getElementById("segundograu");
    fiop.classList.remove("nodisplay");
}

function close() {
    var clse = document.getElementById("dez");
    clse.classList.add("nodisplay");
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

