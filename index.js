import express from 'express' // TYPE MODULE
// const express = require("express") // Type common JS

// inicializando o express - new 
const app = express()

// Exercicio 1
app.get("/api/somar", (req, res) => {
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
    // () = 99 % casos é funcao
    // {} = objeto 
    res.send({ resultado: num1 + num2 })
})

// Exercicio 2
app.get("/api/salario/:valor/:hora", (req, res) => {
    const valorGanho = Number(req.params.valor)
    const horasTrabalhadas = Number(req.params.hora)

    const resultado = valorGanho * horasTrabalhadas
    res.send({ message: resultado })
})


//


//

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})