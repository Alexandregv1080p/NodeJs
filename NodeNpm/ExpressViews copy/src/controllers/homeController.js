//controllers são encarregados de guardar as funções
exports.homePage = (req,res)=>{
    res.render('index')//vai renderizar o arquivo ejs
}
exports.dealPost = (req,res)=>{
    res.send('Ei, sou a tua nova rota')
}