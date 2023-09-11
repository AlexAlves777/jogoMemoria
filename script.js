const entrada = document.getElementById("entrada");
const btn = document.getElementById("btn");
let numSacreto = 89;

btn.addEventListener("click", function() { 
    if(entrada.value =="")return alert ("Digite um numero!")
    console.log( entrada.value)

    if (entrada.value > numSacreto) {
        alert("O numero é maior!")
    }

    else if(entrada.value < numSacreto) {
        alert("O numero é menor!")   
    }
    
    else {
        alert("Você acertou")
    }
        
    }
)
