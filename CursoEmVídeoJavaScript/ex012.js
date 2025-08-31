var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} hora(s).`)
if (hora < 13 && hora > 3 ) {
    console.log('Bom dia!')
} else if (hora <= 18 && hora >= 13 ) {
        console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}