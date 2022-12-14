const EventEmitter = require('events')
const fs = require('fs')
const path = require('path')
const emitter = new EventEmitter()
//fs.appendFile(onde ele vai colocar, o que ele vai colocar, uma callback para testtar o erro)
emitter.on('log', (message, object)=>{
    fs.appendFile(
        path.join(__dirname,'log.txt'),
        object+'/n',()=>{
       "foda"
    })
    console.log(message)
})

function log(message,data ) {
    emitter.emit('log', message, data)
} 

module.exports = log

