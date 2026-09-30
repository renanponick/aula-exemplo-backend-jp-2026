const nomes = new Array("Ana", "Batata", "João")

class Pessoa {
    Buscar() {
        return nomes
    }

    BuscarUm(id) {
        return nomes[id]
    }

    Criar(nome) {
        nomes.push(nome)
    }

    Alterar(id, nome) {
        nomes[id] = nome
    }

    Deletar(id) {
        nomes.splice(id, 1)
    }
}

export default new Pessoa()