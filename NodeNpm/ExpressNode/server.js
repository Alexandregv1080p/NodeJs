//para iniciarmos o node, daremos npm init -y
//para instalarmos o express, será através do npm install express
const express = require('express')
const app = express()

// 

app.get('/',(req,res)=>{
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar Form</button>
    </form>
    `)
})
app.post('/',(req,res)=>{
    res.send('Valor enviado!')
})
app.get('/contato', (req,res)=>{
    res.send('Obrigado por entrar em contato')
})
app.listen(3000,() => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})