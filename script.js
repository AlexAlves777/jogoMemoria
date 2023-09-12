const entrada = document.getElementById("entrada");
const btn = document.getElementById("btn");

let erro = 0
let numSacreto;
numSacreto =  Math.random()*100;
numSacreto =  Math.round(numSacreto);
console.log(numSacreto)

btn.addEventListener("click", function() { 
    if(entrada.value =="")return alert ("Digite um numero!")
    console.log( entrada.value)

    if (entrada.value > numSacreto) {
        alert("O numero é maior!")
        erro = erro + 1;
    }
        

    else if(entrada.value < numSacreto) {
        alert("O numero é menor!") 
        erro = erro + 1;  
    }
    
    else {
        alert("Você acertou depois de " + erro + " /n erros")
    }
        
    }
)
