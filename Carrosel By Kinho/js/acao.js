var moldura = document.getElementById("moldura")
moldura.src = "imagem/img1.jpg" // Trocar img

var btnVoltar = document.getElementById("btnVoltar")
var btnAvancar = document.getElementById("btnAvancar")

btnAvancar.onclick = Avancar1
btnVoltar.onclick = Voltar1

function Avancar1() {
    moldura.src = "imagem/img2.jpg"
    btnAvancar.onclick = Avancar2
    btnVoltar.onclick = Voltar2
}

function Avancar2() {
    moldura.src = "imagem/img3.jpg"
    btnAvancar.onclick = Avancar3
    btnVoltar.onclick = Voltar3
}

function Avancar3() {
    moldura.src = "imagem/img4.jpg"
    btnAvancar.onclick = Avancar4
    btnVoltar.onclick = Voltar4
}

function Avancar4() {
    moldura.src = "imagem/img1.jpg"
    btnAvancar.onclick = Avancar1
    btnVoltar.onclick = Voltar1
}

function Voltar1() {
    moldura.src = "imagem/img4.jpg"
    btnAvancar.onclick = Avancar4
    btnVoltar.onclick = Voltar4
}

function Voltar2() {
    moldura.src = "imagem/img1.jpg"
    btnAvancar.onclick = Avancar1
    btnVoltar.onclick = Voltar1
}

function Voltar3() {
    moldura.src = "imagem/img2.jpg"
    btnAvancar.onclick = Avancar2
    btnVoltar.onclick = Voltar2
}

function Voltar4() {
    moldura.src = "imagem/img3.jpg"
    btnAvancar.onclick = Avancar3
    btnVoltar.onclick = Voltar3
}