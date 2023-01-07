//nesse capítulo, basicamente aprendemos a usar a atualziação automatica do NodeMon
//para executarmos o NodeMon, usamos o seguinte trech o no terminalk
//npm install nodemon --save-dev

//para executa-lo
//npx nodemon server.js
const express = require('express')
const app = express()

// 

app.get('/',(req,res)=>{
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar Formulario</button>
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