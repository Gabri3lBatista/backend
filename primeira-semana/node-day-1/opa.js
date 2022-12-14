// const http = require('http');

// const hostname = '127.0.0.3';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// const fs = require('fs')

// console.log('Primeiro comando')

// fs.readFile('./txt.txt', callback)

// function callback(err, content){
//     if(err) return console.error('erro')
//     console.log(String(content))
// }


// console.log('Segundo comando')
// console.log('Terceiro comando')

// //utilizando programação assincrona

// function sum( sucess, erro){
//     const result = 1+1
//     if( result === 2){
//       sucess()    
//     }else{
//       erro()
//     }
// }

// function sucess(){
// }

// function erro(){
// }

// console.log('tentativa')

// sum(
//   ()=> (console.log(`foi um sucessy555reecedcedcdecedc6y6h6y6h6h6yh6h6yh6yh6h6yh6hhy6h66yh6yo`))
// , 
//   ()=> (console.log(`a some nãy6hy6yh6yh6h6yh6yh6h6yh6yh6yh6oe é dois`))
// )

// console.log('tentativa')

//Promise - promessa 
// //then() é o metodo a ser executado com sucesso
// //resolve e reject
// const promise = new Promise((resolve,reject)=>{
//   const result = 1+2
//   if( result === 2){
//     resolve('sucesso')    
//   }else{
//     reject('errado')
//   }
// })

// promise.then((resultado)=>(console.log(resultado)),
// (foda)=>(console.log(foda)))


// const nome = 'Paula Sampaio'
// function whoIsTheBest ( callback, callbackerror){
//   if(nome != 'Paula Sampaio'){
//     callbackerror('Tá errado')
//   }else(
//     callback({
//       nome: nome,
//       message: 'humilde'
//     })
//   )
// }

// whoIsTheBest(
//   ((sucess)=> (console.log(`${sucess.nome}, ${sucess.message}`))),
//   ((error)=>(console.log(error)))
// )
const nome = 'Paula Sampaio'
p = new Promise((resolve, reject)=>{
  if(nome != 'Paula Sampaio'){
    reject('Tá errado')
  }else(
    resolve({
      nome: nome,
      message: 'humilde'
    })
  )
})

p.then(
  (resultado) => (console.log(`Opa ${resultado.nome}, ${resultado.message}`)),
  (errado)=> (console.log(errado))
)

