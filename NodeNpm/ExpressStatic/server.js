const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')
app.use(
    express.urlencoded(
        {
            extended:true
        }
    ),
    
)
//caminho absoluto para a pasta ejs
app.set('views',path.resolve(__dirname,'src','views'))

//engine para renderizar arquivos ejs
app.set('view engine','ejs')
//necessario dar o comando npm i ejs


app.use(routes)

app.listen(3000,() => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})