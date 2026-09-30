import express from "express"
import ControllerPessoa from '../controller/pessoa.js'

const router = express.Router()

router.get("/buscar", ControllerPessoa.Buscar)
router.get("/buscarUm/:id", ControllerPessoa.BuscarUm)
router.post("/criar", ControllerPessoa.Criar)
router.put("/alterar/:id", ControllerPessoa.Alterar)
router.delete("/deletar/:id", ControllerPessoa.Deletar)

export default router