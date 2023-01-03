module.exports = class Animal{
    constructor(nome){
        this.nome = nome
    }

    barulho(){
        console.log(`${this.nome} está fazendo barulho`)
    }
}