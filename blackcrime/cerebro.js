var botesq = document.getElementById("botesq")
var botdir = document.getElementById("botdir")
var imagemAlterada = false

botdir.addEventListener("click", clicar)
botesq.addEventListener("mouseenter", entrarEsquerdo)
botdir.addEventListener("mouseenter", entrarDireito)
botesq.addEventListener("mouseout", sairEsquerdo)
botdir.addEventListener("mouseout", sairDireito)

function clicar() {
    var imagem = document.getElementById("imagem")
    var divPeixe = document.getElementById("peixe")
    var titulo = document.getElementById("titulo")

    if (!imagemAlterada) {
        imagem.src = "eu.png"
        divPeixe.style.marginTop = '112px'
        imagem.style.marginLeft = '212px'
        titulo.innerHTML = "JOINHA"

        imagemAlterada = true
    } else {
        imagem.src = "xeipe.png"
        divPeixe.style.marginTop = '180px'
        imagem.style.marginLeft = '0px'
        titulo.innerHTML = "Congratulations. you are our lucky winner!"

        imagemAlterada = false
    }
    
}

function entrarEsquerdo() {
    botesq.style.backgroundColor = "rgb(214, 209, 250)"
}

function entrarDireito() {
    botdir.style.backgroundColor = "rgb(214, 209, 250)"
}

function sairEsquerdo() {
    botesq.style.backgroundColor = "rgb(207, 202, 202)"
}

function sairDireito() {
    botdir.style.backgroundColor = "rgb(207, 202, 202)"
}