import express from 'express'
import router from './src/router/exercicio.js'

const app = express();
app.use(express.json())

app.use(router)

app.listen(3000, () => {
    console.log("Servidor ouvind na porta 3000")
})