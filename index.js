import express from 'express' 

const app = express()
app.use(express.json())

app.post("/api/somar", (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2
    res.send({ resultado: num1 + num2 })
})

app.get("/api/salario/:valor/:hora", (req, res) => {
    const valorGanho = Number(req.params.valor)
    const horasTrabalhadas = Number(req.params.hora)

    const resultado = valorGanho * horasTrabalhadas
    res.send({ message: resultado })
})

app.listen(3000, () => {
    console.log("Servidor na porta 3000")
})