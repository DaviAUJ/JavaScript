var agora = new Date()
var hora = agora.getTime()

console.log(`Agora são exatamente ${hora} horas`)

if(hora < 6 || hora === 24) {
    console.log("Boa madrugada!")
} else if(hora < 12) {
    console.log("Bom dia!")
} else if(hora < 18) {
    console.log("Boa tarde!")
} else if(hora < 24) {
    console.log("Boa noite!")
} else {
    console.log("Essa hora não existe")
}