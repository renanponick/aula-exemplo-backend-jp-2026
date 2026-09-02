import express from 'express' 

const app = express()
app.use(express.json())

app.post("/api/somar", (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2
    res.send({ mensagem: num1 + num2 })
})

app.get("/api/div/:num1/:num2", (req, res) => {
    const num1 = Number(req.params.num1)
    const num2 = Number(req.params.num2)
    const resultado = num1 / num2
    res.send({ mensagem: resultado })
})
app.get("/api/mult", (req, res) => {
    // usar o ? na url
    const num1 = req.query.num1
    const num2 = req.query.num2
    res.send({ message: num1 * num2 })
})

app.listen(3000, () => {
    console.log("Servidor na porta 3000")
})