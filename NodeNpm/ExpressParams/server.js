const express = require('express')
const app = express()

//serve para tratar o body das requisições
app.use(
    express.urlencoded(
        {
            extended:true
        }
    )
)
app.get('/',(req,res)=>{
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar </button>
    </form>
    `)
})
//para trabalharmos com parametros de rota
//utilizamos o uso dos ":"
//o uso do "?", é para deixar como opcional
app.get('/testes/:idUsuarios?/:usersTasks?',(req,res)=>{
    // /profiles/3
    console.log(req.params)
    res.send(req.params)
})

app.get('/testes2/:usuarios?/:profile?',(req,res)=>{
    // /profiles/?chave1=valor&chave2=valor2
    console.log(req.query)
    res.send(req.query)
})

app.post('/',(req,res)=>{
    res.send(`O que voce me enviou foi : ${req.body.nome} ` )
})
app.listen(3000,() => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})