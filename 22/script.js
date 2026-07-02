function calc(op){
    let numero1 = parseFloat(document.getElementById("n1").value)
    let numero2 = parseFloat(document.getElementById("n2").value)
    let resultado;
 
if (isNaN(numero1) || isNaN(numero2)) {
    resultado ='Digite dois números validos'

       switch (op) {
        case "+":
            resultado = num1 + num2;            
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                resultado = "Divisão por zero!"
            }  else {
                resultado = num1 /num2;
            }
            break;
            default:
                resultado = "Operação invalida";
    }
 
    
 



// } else if (op === '+') resultado = numero1 + numero2;
//  else if (op === '-') resultado = numero1 - numero2;
//  else if (op === '*') resultado = numero1 * numero2;
//  else if (op === '/') resultado = numero1 / numero2;
//  else if (op === '/') {
//      if (numero === 0) resultado = 'Divisão pro zero!'
//      else
//         resultado = numero1 / numero2;
//     }
    
 
document.getElementById("resultado").innerText = resultado;
}