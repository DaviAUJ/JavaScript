function verificar() {
    var idade = new Date().getFullYear() - document.querySelector("input#nascimento").value
    var sexo = document.querySelector("input[name='opcao']:checked").value
    var divImagem = document.querySelector("div#divImagem")
    var txtImagem = document.querySelector("p#txtImagem")
    var mensagem = "Detectamos "
    var nomeImg

    if(document.querySelector("img#imagem") != null) {
        divImagem.removeChild(document.querySelector("img#imagem"))
    }
    
    // gerar nome da imagem e mensagem
    if(sexo == "Masculino") {
        nomeImg = "M"
        mensagem += "um homem "
    }
    else {
        nomeImg = "F"
        mensagem += "uma mulher "
    }

    if(idade < 1 || idade > 122) {
        nomeImg = "anonimo"
        mensagem = "<< ERRO >> Ano de nascimento inválido"
    } else {
        if(idade <= 5) {nomeImg += "1-5"}
        else if(idade <= 13) {nomeImg += "6-13"}
        else if(idade <= 19) {nomeImg += "14-19"}
        else if(idade <= 29) {nomeImg += "20-29"}
        else if(idade <= 59) {nomeImg += "30-59"}
        else {nomeImg += "60-112"}

        if(idade == 1) {mensagem += "com 1 ano de idade."} 
        else {mensagem += `com ${idade} anos de idade.`}
    }

    nomeImg += ".png"

    var imagem = document.createElement("img")
    imagem.setAttribute('src', nomeImg)
    imagem.setAttribute('id', "imagem")

    divImagem.style.textAlign = "center"
    txtImagem.innerHTML = mensagem
    txtImagem.style.marginBottom = "20px"

    divImagem.appendChild(imagem)
}