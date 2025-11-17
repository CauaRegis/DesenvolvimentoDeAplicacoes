var textosCopiaveis = document.getElementsByClassName("copiavel")

for (let i = 0; i < textosCopiaveis.length; i++) {
    textosCopiaveis[i].style.cursor = "pointer"
}

for (let i = 0; i < textosCopiaveis.length; i++) {
    textosCopiaveis[i].onclick = () => copiarCaminho(textosCopiaveis[i])
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

    /* var textoOriginal = texto.innerHTML
    var mensagemDeCopiado = " copiado!"
    // mensagemDeCopiado.style.color = "red"

    texto.innerHTML = texto.innerHTML+mensagemDeCopiado

    const myTimeout = setTimeout(() => {
        texto.innerHTML = textoOriginal
        console.log("rabbit")
    }, 3000); */
}