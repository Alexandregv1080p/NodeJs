//controllers são encarregados de guardar as funções
exports.controllPage = (req,res)=>{
    res.send(`
    <form action="/contact" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar Contato </button>
    </form>
    `)
}
exports.contactPost = (req,res)=>{
    res.send(`Funciona Sr(a): ${req.body.nome}`)
}