const input1 = document.querySelector(".input-1");
const input2 = document.querySelector(".input-2");
const input3 = document.querySelector(".input-3");
const input4 = document.querySelector(".input-4");
const input5 = document.querySelector(".input-5");
const input6 = document.querySelector(".input-6");
const btn1 =  document.querySelector(".btn-1");
const btn2 =  document.querySelector(".btn-2");
const btn3 =  document.querySelector(".btn-3");
const salida = document.querySelector(".salida");

btn1.addEventListener("click", ()=>{
   salida.textContent = `resultado de restar los numeros: ${input1.value - input2.value}`;
})

btn2.addEventListener("click", ()=>{
   salida.textContent = `resultado de restarlo: ${input3.value - input4.value} 
   resultado de multiplicarlo: ${input3.value * input4.value}`;
})

btn3.addEventListener("click", ()=>{
   let precio = parseFloat(input5.value);
   let iva = precio * parseFloat(input6.value) / 100;
   salida.textContent = `precio por pagar: ${precio += iva}`;
})

