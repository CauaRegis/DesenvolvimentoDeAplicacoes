var item1 = document.querySelectorAll("li")

// console.log(item1[0].innerHTML)
item1[0].innerHTML = "Cafezinho"
item1[1].innerHTML = "Leitinho"
item1[2].innerHTML = "Aguina"

var section = document.querySelectorAll("section")
var h4 = document.createElement("h4")
h4.innerHTML = "Oi"

section.append(h4)