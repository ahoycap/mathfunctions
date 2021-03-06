﻿/* BUILT BY 
CÉSAR O. ARAÚJO 
AND 
CAIO FERNANDO*/

function operations(evt, opName) {
    // Variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(opName).style.display = "block";
    evt.currentTarget.className += " active";
}

function close() {
    var clse = document.getElementById("dez");
    clse.classList.add("nodisplay");
}

// 10% of a number
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

// X% of a number
function xpc() {

    var number = document.getElementById("campo1").value;
    var pct = document.getElementById("campo2").value * 0.01;
    var total = (number * pct);
    var arredondado = total.toFixed(2);
    event.preventDefault();

    if(campo1.value !== 0 && campo2.value !== 0) {
        document.getElementById("resposta").innerHTML = arredondado;
    }else{
        document.getElementById("resposta").innerHTML = "Digite apenas números";
    } 
}


function imparoupar() {
    var number = document.getElementById("campo3").value;
    var res = (number%2);
    event.preventDefault();
 
    if(number == 0){
        document.getElementById("resposta").innerHTML = "O número digitado foi o zero!";
    }else if(res === 0) {
        document.getElementById("resposta").innerHTML = "O número digitado é par!";
    }else if(res === 1) {
        document.getElementById("resposta").innerHTML = "O número digitado é ímpar!";
    }else {
        document.getElementById("resposta").innerHTML = "O caractere digitado é inválido!";
    }
}

function firstgrau() {
    var a = document.getElementById("campo4").value;
    var b = document.getElementById("campo5").value;
    event.preventDefault();

    if (a != 0) {
        a *= -1;
        var raiz = (b/a).toFixed(2);
        document.getElementById("resposta").innerHTML = "A raíz da equação é: " + raiz;
    }
}

function secondgrau() {
    var na = document.getElementById("campo6").value;
    var nb = document.getElementById("campo7").value;
    var nc = document.getElementById("campo8").value;
    event.preventDefault();
    var delta = (Math.pow(nb, 2)) - (4*na*nc);

    if(delta > 0) {
        var x1 = ((-nb + Math.sqrt(delta))/(2*na)).toFixed(2);
        var x2 = ((-nb - Math.sqrt(delta))/(2*na)).toFixed(2);
        document.getElementById("resposta").innerHTML = "As raízes da equação são: x1=" + x1 + " e x2=" +x2;
    }else if(delta == 0) {
        var x3 = ((-nb)/(2*a)).toFixed(2);
        document.getElementById("resposta").innerHTML = "A raíz da equação é: x1=" + x3;
    }else{
        document.getElementById("resposta").innerHTML = "A equação sugerida não possui raízes reais pois o seu delta é igual a zero!";
    }
}


