//aqui deixamos um arquivo responsável pelo controle de rotas

const e = require('express')
const rout = e.Router()
const homeControll = require('./src/controllers/homeController')
const contactControll = require('./src/controllers/contactController')

// Rotas de home
rout.get('/', homeControll.homePage)
rout.post('/',homeControll.dealPost)

//Rotas de contato
rout.get('/contact', contactControll.controllPage)
rout.post('/contact',contactControll.contactPost)


module.exports = rout