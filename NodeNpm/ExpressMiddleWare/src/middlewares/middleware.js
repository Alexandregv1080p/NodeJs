//toda vez que fizermos requisições pelas rotas, o middleware sera executado
exports.globalMidlleware = (req,res,next)=>{
    //só aparecerá se o cliente der um post no input
    if(req.body.cliente){
        console.log()
        console.log('Passei no middleware global')
        console.log()
    }
    

    next()
}