addEventListener("DOMContentLoaded", ()=>{
   //     4. Cálculo de áreas - Elige una figura geométrica:" Triángulo y Círculo
// ¿Qué figura quiere calcular (Escriba T o C)?
// Triangulo = base * altura / 2
// Circulo = PI * radio* radio
let figura = prompt('Ingrese la figura a la que desea calcular el area(Para el triangulo la letra "T" y para el circulo la "C"')
let figMayus = figura.toUpperCase
if (figMayus=='T'){
    let base = Number(prompt('Ingrese la base'))
    let altura = Number(prompt('Ingrese la altura'))
    let areaTri = (base*altura)/2;
    console.log(`El area del triangulo es ${areaTri}`);
}
if (figMayus='C'){
    let radio = Number(prompt('Ingrese el radio'))
    let areaCir = (Math.PI*(radio**2));
    console.log(`El area del circulo es ${areaCir}`);
}
 })