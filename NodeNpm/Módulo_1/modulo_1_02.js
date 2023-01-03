class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
}
//o exports cria uma variável para o elemento desejado
//permitindo exportar o elemento para outra pasta ou arquivo
exports.Pessoa = Pessoa