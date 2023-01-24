const input = document.querySelector("#box")
let mainList = new Array()

// Setting the events
document.querySelector("#leftbutton").addEventListener("click", calculate)
document.querySelector("#rightbutton").addEventListener("click", add)

function sum(array) {
    let output = 0
    
    for(let int in array) {
        output += array[int]
    }

    return output
}

function average(array) {
    output = sum(array) / array.length

    return Math.round(output * 100) / 100
}

function add(){
    const changelog = document.querySelector("#changelog")
    let inputValue = parseInt(input.value)
    let log = ""
    
    // Checks if it's in range
    if(0 <= inputValue && inputValue <= 100) {
        mainList.push(inputValue)
        log = `Valor ${inputValue} adicionado.`
        
    } else {
        log = "Valor inválido"
    }
    
    // Adds new line if it's not empty
    if(changelog.innerHTML !== "") {
        changelog.innerHTML += "<br>"
    }
    
    changelog.innerHTML += log
    // Clears the the input box for faster usage
    input.value = ""
}

function calculate() {
    if(mainList.length === 0) {
        window.alert("Nenhum número cadastrado")

    } else {
        const results = document.querySelectorAll(".variable")
        mainList.sort()
    
        results[0].innerHTML = mainList.length
        results[1].innerHTML = mainList.slice(-1)
        results[2].innerHTML = mainList[0]
        results[3].innerHTML = sum(mainList)
        results[4].innerHTML = average(mainList)

    }

}