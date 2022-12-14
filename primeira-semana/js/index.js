/* console.log("Hello seu otario")
console.error("Tá errado")
console.warn("Se liga irmão ta tudo errado")


//variaveis
//no let ele nao sabe qual tipo é a variavel
//var primeira
//let segunda
//const terceira
//so a let, javasript trabalha com ponto flutuante

let x = 10
const n = "É o Gabs"
console.log(n)

if(true){
    let x = 20
}

console.log(x)

//tipos de dados 
const nx = 10
console.log(nx)
console.log(typeof nx)
num = 3.30

console.log(num)


//bool 
const is_valid = true //or 1 for true or 0 for false, da pra usar em condições
console.log(is_valid)

//null
const nulo = null
console.log(nulo)
console.log(typeof nulo)

//undefined
let nada
console.log(nada)
console.log(typeof nada)

//array conjunto de dados sequenciados, encadeados. Não precisa ser sor um valor
//podem ser numeros, letras.


const linguagens = ['to fudido','sou foda','é o bixo']
console.log(linguagens[0])
console.log(typeof linguagens[0])

//objetos literais 

const user = {
    username: "Jorge", 
    password: "123",
    age: "43",
    name: "Lil Jorge"
}
console.log(user.username, user.password)
let text = 'minha vida é foda'
//procurar dentro de uma string
console.log(text.indexOf('abc'))
console.log(text.charAt(0)) 
console.log(text.slice(2,10))

const chars = ['vida', 'morte', 'tempo']
console.log(chars.length)
console.log(chars[chars.length-1])
chars[3] = 'F'
chars.pop()
chars.shift('vida')
console.log(chars)



const formData = new FormData(document.querySelector('form'))
const inputValue = formData.get("name")
console.log(inputValue)
*/

/*
const vida = {
    tempo: 'finita',
    felicidade: 'grande',
    dinheiro: 300.33,
    status: ['foda', 'ok', 'bom'],
    vivo: true
}



console.log (vida.status[vida.status.length-1 ])

//destruturing - sem estrutura - destrutura a vida é dura, as vezes uma tortura mesmo assim prossiga

let {  tempo, dinheiro } = vida
console.log(dinheiro)
dinheiro = 32.99

const vector = [ 3,4,2,5 ]
let [v1, v2, , v3 ] = vector
console.log(v3)

// javascript objact notation
// concorrente do xml 

//criando o objeto cachorro 

const dogao = {
    name_dog: 'Filezin',
    agezada: 95
}

console.log(dogao)

const dogJsonzada = JSON.stringify(dogao)

console.log(dogJsonzada)

const dogaoObject = JSON.parse(dogJsonzada)
console.log(dogaoObject)

const jsonErrado = '{ "primeiro": "ok","segundo":22,"tercerio":"dados"}'
const jsonErradoObject = JSON.parse( jsonErrado)
template litres
*/
//doideras

const vetorx = [ 1, 2, 3, 4, 5 ]
console.log(vetorx)
//let [n1, n2, n3, n4, n5] = vetorx

const objeto = {
    n1: vetorx[0],
    n2: vetorx[1],
    n3: vetorx[2],
    n4: vetorx[3],
    n5: vetorx[4]
}

let {  n1, n2, n3, n4, n5 } = objeto

let x1 = n1
let x2 = n2
let x3 = n3
let x4 = n4
let x5 = n5

const oFim = { 
    "x1": x1,
    "x2": x2,
    "x3": x3,
    "x4": x4,
    "x5": x5
}

const objetoJson = JSON.stringify(oFim)

console.log( JSON.stringify(oFim))


const formData = new FormData(document.querySelector('form'))
const inputValue = formData.get("name")
console.log(inputValue)


//estruturas

const n = 100
if(n > 100){
    console.log("teste de entrada no if")
}

function sum(){
    const formData = new FormData(document.querySelector('form'))
    let n1 = parseInt(formData.get('n1'))
    let n2 = parseInt(formData.get('n2'))
    
    console.log(n1+n2)
}
const a = 7
const b = 24
const out = ('21 é '+a+' mais '+b+', que doidera né'+ (2*a+b) + '.')

console.log(`24 é `+a+ `mais `+ b + `,\n que doidera né `+ (2*a+b) + `.`)
console.log(`21 é ${a} mais ${b},
 que doidera né ${{a}}.`)

//Metodos de array
const nomes = ['Gabs', 'Alice', 'Lucas', 'Taina', 'Gustavo']

nomes.forEach(function(nome){
    console.log(nome)
})

const modificadoNome = nomes.map(function(nome){
    if(nome == "Gustavo"){
        return ("Gustavos é foda")
    }else{
        return nome
    }
})
console.log(modificadoNome)

const numeroDaSorte = [33,55,22,1,5,3].filter(function(num){
    if(num < 10){
        return num
    }
})
console.log(numeroDaSorte)

numeroDaSorte.forEach(function(numero){
    console.log(numero)
})

const tomele = numeroDaSorte.reduce(function(num, total){
    return total+num
})

//arrow function === função anonima
// =>
//funcion(data){ return 0 }

const myArrowFunction = (a=7) =>  a+b

console.log(myArrowFunction(7,9))

const fora = () => soma = (x=4) => x+5
console.log(fora())

const namesLength = nomes.map(function(valor){
    return valor.length
})



console.log(namesLength)

const namesTamanho = nomes.map(value => value.length )

 console.log(namesTamanho)

const namesSize = nomes.map( ({length}) => length)
console.log(namesSize)

console.log('ok')


let varX = 50
function xt(){
    varX +=5
   function sumXand5(){
      return varX+5
   }
   return sumXand5()
}
console.log(xt())


class Produto{
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }
    produtoDetails(){
        return `nome ${this.nome}`
    }
}

class Tenis extends Produto {
    constructor(nome, preco, size){
        super(nome,preco)
        this.size = size 
    }

    showNumber(){
        return `Nome do tenis ${this.nome}, tamanho ${this.size}`
    }
}

const shirt = new Produto('Camisa', 3)
const jordan = new Tenis('Jodan', 33, 42)
console.log(shirt.produtoDetails())
console.log(jordan.nome)
console.log(jordan.showNumber())
console.log(typeof(shirt))


const fa = () => soma = ((x=4), () => ()=> (x+5)) ()
console.log(fa())