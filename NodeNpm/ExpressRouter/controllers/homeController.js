//controllers são encarregados de guardar as funções
exports.homePage = (req,res)=>{
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar </button>
    </form>
    <form action="/contact" method="GET">
    <button>Entre em contato</button>
    </form>
    `)
}
exports.dealPost = (req,res)=>{
    res.send('Ei, sou a tua nova rota')
}