var emojiSeta = "&#128073"
var elementoContagem = document.querySelector("div#contagem")

function calcular(inicio, fim, passo) {
    var output = ""

    // Fazendo a lista de valores
    for(var i = inicio; i <= fim; i += passo) {
        output += `${i} ${emojiSeta} `
    }

    // Limpado a ultima seta que sobra
    output = output.slice(0, output.length - emojiSeta.length - 2)

    elementoContagem.innerHTML = output
}

function mostrarResultado() {
    var inicio = parseInt(document.querySelector("input#inicio").value)
    var fim = parseInt(document.querySelector("input#fim").value)
    var passo = parseInt(document.querySelector("input#passo").value)

    if(isNaN(inicio) || isNaN(fim)) {
        window.alert("Existe pelo menos uma credencial vazia.")
        elementoContagem.innerHTML = "Impossível calcular!"

    } else if(inicio > fim) {
        window.alert("Inicío maior que o fim.")
        elementoContagem.innerHTML = "Impossível calcular!"

    } else if(isNaN(passo) || passo === 0) {
        window.alert("Passo inválido. Consedirando 1 como entrada.")
        
        passo = 1
        calcular(inicio, fim, passo)
    
    // easter egg
    } else if(inicio === 7 && fim === 10 && passo === 1968) {
        var sector = document.querySelector("section")
        
        while(sector.hasChildNodes()) {
            sector.removeChild(sector.firstChild)
        }

        sector.appendChild(document.createElement("img"))
        var image = document.querySelector("img")

        image.src = "thom-yorke.jpg"
        sector.style.width = "min-content"

    } else if(inicio >= 0 && fim > 0) {
        calcular(inicio, fim, passo)

    } else {
        elementoContagem.innerHTML = "Impossível calcular!"

    }
}
