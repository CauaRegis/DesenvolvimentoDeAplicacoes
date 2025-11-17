const textosCopiaveis = document.getElementsByClassName("copiavel")

textosCopiaveis[0].style.cursor = "pointer"
textosCopiaveis[1].style.cursor = "pointer"
textosCopiaveis[2].style.cursor = "pointer"
textosCopiaveis[3].style.cursor = "pointer"

textosCopiaveis[0].onclick = () => copiarCaminho(textosCopiaveis[0])
textosCopiaveis[1].onclick = () => copiarCaminho(textosCopiaveis[1])
textosCopiaveis[2].onclick = () => copiarCaminho(textosCopiaveis[2])
textosCopiaveis[3].onclick = () => copiarCaminho(textosCopiaveis[3])

function copiarCaminho(texto) {
    navigator.clipboard.writeText(texto.innerHTML)
    mostraMensagem()
}

function mostraMensagem() {
    navigator.clipboard.writeText("Oda nabunagam")
}