const path = require('path')
const pathArq = path.resolve(__dirname,'test.json')
const write = require('./modules/write')
const read = require('./modules/read')

/* const pessoas = [
    {nome:'João'},
    {nome:'Maria'},
    {nome:'Eduardo'},
    {nome:'Luiza'}
] */

async function readArq(pat){
    const dados = await read(pat)
    readData(dados)
}
function readData(dados){
    //converte o JSON em objeto novamente
    dados = JSON.parse(dados)
    console.log(dados)
}
