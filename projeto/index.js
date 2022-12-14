let caracter = document.getElementById('caracter')
let block = document.getElementById('block')

function jump(){
    if(caracter.classList != 'animate'){
        caracter.classList.add('animate')
    }
    setTimeout(function(){
        caracter.classList.remove('animate')
    },500)
}