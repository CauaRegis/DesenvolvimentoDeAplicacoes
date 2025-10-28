// console.log("oi")

const notaDeZelda = 10

// javascript -> acessando html
var h3 = document.querySelector("h3")
var h5 = document.querySelector("h5")
var vari = document.getElementById("textoB")
var varia = document.getElementsByClassName("textoNormal")

alert(h3.innerHTML)
console.log(h5.innerHTML)

h3.innerHTML = "My man"
h5.innerHTML = "Yeah"
vari.innerHTML = "Oh yea"