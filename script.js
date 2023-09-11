const entrada = document.getElementById("entrada");
const btn = document.getElementById("btn");

btn.addEventListener("click", function() { 
    if(entrada.value =="")return alert ("Digite um numero!")
    console.log( entrada.value)

})
