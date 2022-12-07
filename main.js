addEventListener("DOMContentLoaded", ()=>{
   // 5. Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean positivos:
    // área triangulo= lado * lado.
    let base = Number(prompt('Ingrese la base  del rectangulo '))
    let altura = Number(prompt('Ingrese la altura del rectangulo'))
    if (altura<0 || base<0){
    }
    else{
            area=base*altura
            console.log(`El area del rectangulo es ${area}`);
        }
    
        console.log('Solo se adminten valores positivos');
 })