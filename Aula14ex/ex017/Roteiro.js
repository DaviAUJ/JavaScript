const floats = document.querySelectorAll(".float")
const newline = "<br>"

// Tabuar: o ato de fazer tabuada
function tabuar() {
    let inputValue = parseInt(document.querySelector("#box").value)

    let outputLeft = ""
    let outputCenter = ""
    let outputRight = ""
    
    if(isNaN(inputValue)) {
        // Bringing Everything Everything back to default
        floats[0].innerHTML = ""
        floats[1].innerHTML = ""
        floats[2].innerHTML = "Aguardando..."

        floats[2].style.textAlign = "center"
    
    } else if(inputValue == 7581) {
        floats[0].innerHTML = "amogus"
        floats[1].innerHTML = "× imposter = "
        floats[2].innerHTML = "sus"

    } else {
        // Calculating and formatting what will appear in screen
        for(i = 1; i <= 10; i++) {
            outputLeft += `${i} ${newline}`
            outputCenter += `× ${inputValue} = ${newline}`
            outputRight += `${(i * inputValue)} ${newline}`

        }

        // Setting everything on the website
        floats[0].innerHTML = outputLeft
        floats[1].innerHTML = outputCenter
        floats[2].innerHTML = outputRight
        
        // This pushes the "Aguardando..." text that is now outputRight
        floats[2].style.textAlign = "right"

    }
}