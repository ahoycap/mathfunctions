﻿function operations(evt, opName) {
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



