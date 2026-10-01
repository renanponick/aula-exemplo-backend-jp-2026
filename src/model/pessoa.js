const nomes = new Array(
    {
        nome: "joao",
        idade: 12
    },
    {
        nome: "ana",
        idade: 13
    },
    {
        nome: "guto",
        idade: 11
    }
)

class Pessoa {
    Buscar() {
        return nomes
    }

    BuscarUm(id) {
        return nomes[id]
    }

    Criar(nome, idade) {
        nomes.push({nome, idade})
    }

    Alterar(id, nome, idade) {
        nomes[id].nome = nome
        nomes[id].idade = idade
    }

    Deletar(id) {
        nomes.splice(id, 1)
    }
}

export default new Pessoa()