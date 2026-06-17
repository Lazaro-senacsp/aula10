let peso = parseFloat(prompt("peso"));
let altura = parseFloat(prompt("Altura"));
let imc = peso / (altura * altura);

if(imc <18){
    alert(`O imc é: ${imc}: baixo` );
} else if (imc > 25){
    alert(`O imc é: ${imc}: sobrepeso` );
} else {
    alert(`O imc é: ${imc}: normal` );
}