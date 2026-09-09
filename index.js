import express from 'express'

const app = express();
app.use(express.json())

app.get("/api/operacoes", (req, res) => {
    res.send({ mensagem: "A api pode: Somar, Subtrair, Multiplicar, Div, Potecn, Raizar"})
})

app.post("/api/somar", (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2
    const soma = num1 + num2
    res.send({ soma })
})
app.post("/api/sub", (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2
    const sub = num1 - num2
    res.send({ sub })
})
app.post("/api/mult", (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2
    const mult = num1 * num2
    res.send({ mult })
})
app.post("/api/div", (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2
    const div = num1 / num2
    res.send({ div })
})
app.post("/api/pot", (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2
    const pot = num1 ** num2
    res.send({ pot })
})
app.post("/api/raiz", (req, res) => {
    const num1 = req.body.num1
    const raiz = num1 ** 0.5
    res.send({ raiz })
})

app.listen(3000, () => {
    console.log("Servidor ouvind na porta 3000")
})