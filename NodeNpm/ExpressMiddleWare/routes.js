//aqui deixamos um arquivo responsável pelo controle de rotas

const e = require('express')
const rout = e.Router()
const homeControll = require('./src/controllers/homeController')
const contactControll = require('./src/controllers/contactController')

function meuMiddleWare(req, res,next){
    req.session = { nome: "Alexandre", sobrenome:"Gomes"}
    //console.log('Passei no seu middleware');
    console.log()
    next();
}

// Rotas de home
rout.get('/',meuMiddleWare, homeControll.homePage)

//Teste com o primeiro midleware
/* rout.get('/',meuMiddleWare, homeControll.homePage, (req,res,next)=>{
    console.log('')
    console.log('Ainda estou aqui')
    console.log(`Chegamos em outro req.session.nome ${req.session.nome}`)
}) */

rout.post('/',homeControll.dealPost)

//Rotas de contato
rout.get('/contact', contactControll.controllPage)
rout.post('/contact',contactControll.contactPost)


module.exports = rout