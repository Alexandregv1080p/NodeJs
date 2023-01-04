const fs = require('fs').promises
const path = require('path')

async function readDir(rootDir){
    rootDir = rootDir || path.resolve(__dirname)//path.resolve(__dirname) é usado para referenciar a pasta atual
    const files = await fs.readdir(rootDir)//recebemos os arquivos da pasta atual
    walk(files,rootDir)
}
async function walk(files,rootDir){
    for(let file of files){
        const fileFullPath = path.resolve(rootDir,file) //irá compor o nome do arquivo de acordo com a pasta selecionada
        const stats = await fs.stat(fileFullPath)
        if(/\.git/g.test(fileFullPath)) continue //expressão regular q remove todos os diretórios git
        if(/node_modules/g.test(fileFullPath)) continue

        if(stats.isDirectory()){
            readDir(fileFullPath)
            continue
        }
        if(!/\.css/g.test(fileFullPath)) continue
        console.log(fileFullPath)
    }
}
readDir('C:/Users/Usuario/Desktop/Git e Github/Meu Projetos')