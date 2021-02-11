const {Schema, model } = require('mongoose')

const ProdutoSchema = new Schema({
    nome:{
        type: String

    },
    preco: {
        type: Number
    }
})

const modelo = model("produtos", ProdutoSchema)

module.exports = modelo