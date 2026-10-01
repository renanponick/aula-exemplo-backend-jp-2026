import ServicePessoa from '../service/pessoa.js'

class ControllerPessoa {

    Buscar(req, res) {
        try {
            const nomes = ServicePessoa.Buscar()

            res.send({ nomes })
        } catch (e) {
            res.send({ message: e.message })
        }
    }

    BuscarUm(req, res) {
        try {
            const id = req.params.id
            const nome = ServicePessoa.BuscarUm(id)

            res.send({ nome })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    Criar(req, res) {
        try {
            const nome = req.body.nome
            const idade = req.body.idade
            ServicePessoa.Criar(nome, idade)

            res.send({ message: "Criado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    
    Alterar(req, res) {
        try {
            const id = req.params.id
            const nome = req.body.nome
            ServicePessoa.Alterar(id, nome)

            res.send({ message: "Alterado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    
    Deletar(req, res) {
        try {
            const id = req.params.id
            ServicePessoa.Deletar(id)
            
            res.send({ message: "Deletado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

}

export default new ControllerPessoa()