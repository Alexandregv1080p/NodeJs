const fs = require('fs').promises
const path = require('path')
const pathArq = path.resolve(__dirname,'..','test.txt')//a partir da pasta atual, volte uma pasta e resolva o caminho de test.txt

//cria o arquivo a apartir de pathArq e escreve 'Teste 1' dentro
fs.writeFile(pathArq,'Teste 1',{ flag:'w', encoding:'utf-8'})
