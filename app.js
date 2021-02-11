const app = require('./src/config/server')
const connection = require('./src/config/connection')
const Produtos = require('./src/models/produtos')

//SELECT
app.get("/", async(req,res) => {
    const resultado =await Produtos.find()
    res.json(resultado)
})

//INSERT    
app.post("/", async (req,res) => {
    const { nome } = req.body

    let resultado = await Produtos.create({nome, preco})

    res.json(resultado)

})
//Upadate
app.put("/:id", async (req,res) => {
    const {id} = req.params
    const{nome,preco} = req.body

//1-condição
    let resultado = await Produtos.updateOne({ _id:id},{
        nome,preco
    })

    res.json(resultado)

})

//Delete
app.delete("/", async(req,res) =>{
    const{id} = req.body

    let resultado = await Produtos.deleteOne({ _id:id})

    res.json(
        resultado
    )
})