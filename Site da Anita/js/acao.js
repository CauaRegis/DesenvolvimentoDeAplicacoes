// Variaveis

var textosCopiaveis = document.getElementsByClassName("copiavel")
const fotos = []
var foto1 = document.getElementById("foto1")
var foto2 = document.getElementById("foto2")
var foto3 = document.getElementById("foto3")
var fotoAtual = 2;
var btnVol = document.getElementById("btnVol")
var btnAvn = document.getElementById("btnAvn")

for (let i = 0; i < textosCopiaveis.length; i++) {
    textosCopiaveis[i].style.cursor = "pointer"
}

for (let i = 0; i < 20; i++) {
    const numero = i+1
    fotos[i] = "quadro"+numero+".jpg"
}

// Criando os botões

for (let i = 0; i < textosCopiaveis.length; i++) {
    textosCopiaveis[i].onclick = () => copiarCaminho(textosCopiaveis[i])
}

btnVol.onclick = Voltar
btnAvn.onclick = Avancar

// Funções

function Voltar() {
    fotoAtual--
    if (fotoAtual <= 0) fotoAtual = fotoAtual + fotos.length;

    var fotoAnterior = fotoAtual - 1;
    if (fotoAnterior <=0) fotoAnterior = fotoAnterior + fotos.length;

    var fotoProxima = fotoAtual + 1;
    if (fotoProxima > fotos.length) fotoProxima = fotoProxima - fotos.length;

    foto1.src = "img/"+fotos[fotoAnterior-1]
    foto2.src = "img/"+fotos[fotoAtual-1]
    foto3.src = "img/"+fotos[fotoProxima-1]
}

function Avancar() {
    console.log("oi")
    fotoAtual++
    if (fotoAtual > fotos.length) fotoAtual = fotoAtual - fotos.length;

    var fotoAnterior = fotoAtual - 1;
    if (fotoAnterior <= 0) fotoAnterior = fotoAnterior + fotos.length;

    var fotoProxima = fotoAtual + 1;
    if (fotoProxima > fotos.length) fotoProxima = fotoProxima - fotos.length;

    foto1.src = "img/"+fotos[fotoAnterior-1]
    foto2.src = "img/"+fotos[fotoAtual-1]
    foto3.src = "img/"+fotos[fotoProxima-1]
}

function copiarCaminho(texto) {
    navigator.clipboard.writeText(texto.innerHTML)
    mostraMensagem(texto)
}

function mostraMensagem(texto) {
    var textosCopiaveis = document.getElementsByClassName("copiavel")
    var textosInvisiveis = document.getElementsByClassName("invisivel")
    var index = 0
    
    for (let i = 0; i < textosCopiaveis.length; i++) {
        if (textosCopiaveis[i].innerHTML == texto.innerHTML) index = i
    }

    textosInvisiveis[index].innerHTML = "Copiado!"
    
    const myTimeout = setTimeout(() => {
        textosInvisiveis[index].innerHTML = " "
        console.log("rabbit")
    }, 3000);

}