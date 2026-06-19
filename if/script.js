let alcool =parseFloat(prompt ("digite o valor da gasolina"))
let gasolina =parseFloat(prompt ("digite o valor do alcool"))

if (alcool <= gasolina * 0.7) {
    alert("Álcool compensa mais");
} else {
    alert("Gasolina compensa mais");
}