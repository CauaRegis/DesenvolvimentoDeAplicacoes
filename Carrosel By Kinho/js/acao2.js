var moldura = document.getElementById("moldura")
moldura.src = "imagem/img1.jpg" // Trocar img

var btnVoltar = document.getElementById("btnVoltar")
var btnAvancar = document.getElementById("btnAvancar")

var fotos = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg"]
var index = 0

btnAvancar.onclick = Avancar
btnVoltar.onclick = Voltar

window.onload = Inicio // Função é chamada automaticamente quando a pagina é carregada

function Inicio() {
    alert("IAAA")
}

function Avancar() {
    if (index < fotos.length - 1) {
        index++
        moldura.src = "imagem/"+fotos[index]
    }
    else {
        index = 0
        moldura.src = "imagem/"+fotos[index]
    }
}

function Voltar() {
    if (index > 0) {
        index--
        moldura.src = "imagem/"+fotos[index]
    }
    else {
        index = fotos.length - 1
        moldura.src = "imagem/"+fotos[index]
    }
}