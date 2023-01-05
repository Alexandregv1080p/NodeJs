const fs = require('fs').promises
const path = require('path')
const pathArq = path.resolve(__dirname,'..','test.json')

const pessoas = [
    {nome:'João'},
    {nome:'Maria'},
    {nome:'Eduardo'},
    {nome:'Luiza'}
]

const json = JSON.stringify(pessoas,'',2)

//cria o arquivo a apartir de pathArq e escreve 'Teste 1' dentro
fs.writeFile(pathArq,json,{ flag:'w', encoding:'utf-8'})
