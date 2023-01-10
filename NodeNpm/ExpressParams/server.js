const express = require('express')
const app = express()

// 

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
    console.log(req.params)
    res.send(req.params)
})

app.get('/testes2/:usuarios?/:profile?',(req,res)=>{
    console.log(req.query)
    res.send(req.params)
})

app.post('/',(req,res)=>{
    res.send('Valor enviado!')
})
app.listen(3000,() => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})