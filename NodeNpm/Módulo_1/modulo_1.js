const nome = 'Luiz'
const sobrenome = 'Costa'

const falaNome = () =>{
    return nome + " " + sobrenome
}

exports.nome = nome
exports.sobrenome = sobrenome
exports.falaNome = falaNome

console.log(exports)