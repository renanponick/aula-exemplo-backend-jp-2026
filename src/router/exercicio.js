import express from "express"
import ControllerExercicio from '../controller/exercicio.js'

const router = express.Router()

router.get("/api/operacoes/matematicas", ControllerExercicio.Operacoes)
router.post("/api/somar", ControllerExercicio.Somar)
router.post("/api/sub", ControllerExercicio.Sub)
router.post("/api/mult", ControllerExercicio.Mult)
router.post("/api/div", ControllerExercicio.Div)
router.post("/api/pot", ControllerExercicio.Pot)
router.post("/api/raiz", ControllerExercicio.Raiz)

export default router