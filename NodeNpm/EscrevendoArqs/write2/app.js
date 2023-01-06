const path = require('path')
const pathArq = path.resolve(__dirname,'test.json')
const write = require('./modules/write')

const pessoas = [
    {nome:'João'},
    {nome:'Maria'},
    {nome:'Eduardo'},
    {nome:'Luiza'}
]

//converte o objeto para JSON, fazendo a identação de 2 es
const json = JSON.stringify(pessoas,'',2)
write(pathArq,json)