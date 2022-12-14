const os = require('os')
const { stringify } = require('querystring')
const log = require('./logger')

const { freemem, totalmem } = os


const total = parseInt(totalmem()/1024/1024)

const free = parseInt(freemem()/1024/1024)

console.log(`${free}MB, ${total}MB`)

const usage = total - free 

const por = parseInt(usage/total) * 100

console.log(`${por}MB, ${total}MB`)

const stats = {
    total: `${total}`,
    freeMem: `${free}`,
    percents: `${por}% em uso`
}

console.table(stats)

setInterval(()=>{
    
const { freemem, totalmem } = os


const total = parseInt(totalmem()/1024/1024)

const free = parseInt(freemem()/1024/1024)


const usage = total - free 

const por = parseInt((usage/total) * 100)

console.log(`${por}MB, ${total}MB`)

const stats = {
    total: `${total}`,
    freeMem: `${free}`,
    percents: `${por}% em uso`
}
console.clear()

//chama a função que transfere o que está em stats para um arquivo txt 
log(`kkf`, JSON.stringify(stats))

}, 1000)

