const cantidad = document.getElementById("cantidad");
const btn1 = document.querySelector(".btn-1");

const edad = document.getElementById("edad");
const lista = document.getElementById("lista");
const salida = document.getElementById("salida");

btn1.addEventListener("click", ()=>{
    
})



let pulsaciones;

lista.addEventListener("input", (e)=>{

if(e.target.value == "femenino") {
salida. textContent = `pulso femenino: ${pulsaciones = (220-10) / parseInt(edad.value)}`
} 

else{
salida. textContent = `pulso masculino: ${pulsaciones = (210-40) / parseInt(edad.value)}`
}
})