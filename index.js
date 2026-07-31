import express from 'express' // TYPE MODULE
// const express = require("express") // Type common JS

// inicializando o express - new 
const app = express()

// http://localhost:3000/api/somar?num1=30&num2=40
app.get("/api/somar", (req, res) => {
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
    res.send({ message: num1 + num2 })
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})