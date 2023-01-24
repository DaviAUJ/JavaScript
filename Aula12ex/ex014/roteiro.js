function carregar() {
    var msg = window.document.querySelector("div#msg")
    var img = window.document.querySelector("img#imagem")
    var corFundo = window.document.body.style
    var tempo = new Date().getHours()
    var periodo

    if(tempo < 6) {
        img.src = "madrugada.png"
        corFundo.background = "#14130e"
        periodo = "madrugada"
    } else if(tempo < 12) {
        img.src = "manha.png"
        corFundo.background = "#ede3d7"
        periodo = "manhã"
    } else if(tempo < 18) {
        img.src = "tarde.png"
        corFundo.background = "#bdd7e9"
        periodo = "tarde"
    } else {
        img.src = "noite.png"
        corFundo.background = "#322944"
        periodo = "noite"
    }

    if(tempo == 1) {
        msg.innerHTML = `Agora é 1 hora da madrugada.`
    } else {
        msg.innerHTML = `Agora são ${tempo} horas da ${periodo}.`
    }
}

function clicar() {
    window.document.body.remove()
    window.document.write("VIADO")
    window.document.body.style.font = "normal 100px arial"
}
