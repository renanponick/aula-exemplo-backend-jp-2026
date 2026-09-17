import ServiceExercicio from '../service/exercicio.js'

class ControllerExercicio {

    Operacoes(req, res) {
        res.send({ mensagem: "A api pode: Somar, Subtrair, Multiplicar, Div, Potecn, Raizar" })
    }

    Somar(req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2
            const soma = ServiceExercicio.Somar(num1, num2)
            res.send({ soma })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    Sub(req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2
            const sub = ServiceExercicio.Sub(num1, num2)
            res.send({ sub })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    Mult(req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2
            const mult = ServiceExercicio.Mult(num1, num2)
            res.send({ mult })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    Div(req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2
            const div = ServiceExercicio.Div(num1, num2)
            res.send({ div })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    Pot(req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2
            const pot = ServiceExercicio.Pot(num1, num2)
            res.send({ pot })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    Raiz(req, res) {
        try {
            const num1 = req.body.num1
            const raiz = ServiceExercicio.Raiz(num1)
            res.send({ raiz })
        } catch (error) {
            res.send({ message: error.message })
        }
    }


}

export default new ControllerExercicio()