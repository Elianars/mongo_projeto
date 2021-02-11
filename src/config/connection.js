const mongoose = require('mongoose');

function connection(){
    mongoose.connect("mongodb://localhost/Projeto",
    {useNewUrlParser:true, useUnifiedTopology:true})
    // ecommmerce é o nome do banco de dados posso escolher qualquer nome
    .then(() => {
        console.log("MongoDB conectou com sucesso")
    })
    .catch((error) => {
        console.log(error)
    })
}

module.exports = connection()

