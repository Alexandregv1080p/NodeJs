exports.homePage = (req,res,next)=>{
    res.render('index')
}
/* exports.homePage = (req,res,next)=>{
    console.log(`Olha oq está no meu req.session.nome: ${req.session.nome}`)
    console.log('Respondi o cliente')
    res.render('index')//vai renderizar o arquivo ejs
    next(); //aqui invocamos o middleware
} */
exports.dealPost = (req,res)=>{
    res.send(req.body)
}