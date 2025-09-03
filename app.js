const input1 = document.querySelector(".input-1");
const input2 = document.querySelector(".input-2");
const input3 = document.querySelector(".input-3");
const input4 = document.querySelector(".input-4");
const input5 = document.querySelector(".input-5");
const input6 = document.querySelector(".input-6");
const input7 = document.querySelector(".input-7");
const btn1 =  document.querySelector(".btn-1");
const btn2 =  document.querySelector(".btn-2");
const btn3 =  document.querySelector(".btn-3");
const btn4 =  document.querySelector(".btn-4");
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

btn4.addEventListener("click", ()=>{
   let lado = parseInt(input7.value);
   salida.textContent = `el area del cuadrado es: ${lado ** 2} y el perimetro es: ${lado * 4}`;
})

// ejercicio 16

/*let nombre = prompt("escribe tu nombre", "juan");

nombre ? salida.textContent = `hola ${nombre}` : alert("no ingresaste tu nombre");*/

// ejercicio 17

let i = 0;

while (i < 3){
   let numero = parseInt(prompt("ingresa tres numero por secuencia"));
   let media = [];
   media.push(numero);
   salida.textContent = `hola ${media}`;
   i++
}