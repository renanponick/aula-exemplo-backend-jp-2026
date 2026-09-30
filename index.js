import express from 'express'
import router from './src/router/pessoa.js'

const app = express();
app.use(express.json())

app.use("/api", router)

app.listen(3000, () => {
    console.log("Servidor ouvind na porta 3000")
})