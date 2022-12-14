let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0
function increment(){
    count = count + 1 
    countEl.innerText = count
    console.log(count)

}

console.log(document.getElementById('titulo').innerText)
console.log(document.getElementsByClassName('text'))
const texts = document.querySelectorAll('.text')
console.log(texts.forEach((value) => console.log(value)) )

texts[0].insertAdjacentText = 'kkska'


const button = document.querySelector('#btn')
texts[0].style.backgroundColor = 'red'
button.addEventListener('click',()=>(texts[3].textContent = `Ok cara voce clicou`))
button.addEventListener('click',()=>(texts[3].style.padding= '30'))

function display( some) {
    console.log(some)
}

function calcular (a, b, callback ) {
    const some = a+b
    callback(some)
}

calcular(2,3,display)


const myJason = { "name": "Chris", "age": "38"}
console.log(myJason)

console.log(JSON.stringify(myJason))
