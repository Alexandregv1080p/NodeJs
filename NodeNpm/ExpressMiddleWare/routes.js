//aqui deixamos um arquivo responsável pelo controle de rotas

const e = require('express')
const rout = e.Router()
const homeControll = require('./src/controllers/homeController')
const contactControll = require('./src/controllers/contactController')

function meuMiddleWare(req, res,next){
    console.log();
    console.log('Passei no seu middleware');
    console.log()
}

// Rotas de home
rout.get('/',meuMiddleWare, homeControll.homePage)
rout.post('/',homeControll.dealPost)

//Rotas de contato
rout.get('/contact', contactControll.controllPage)
rout.post('/contact',contactControll.contactPost)


module.exports = rout