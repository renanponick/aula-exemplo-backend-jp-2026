import database from "../config/database.js";

class Pessoa {
    constructor() {
        this.model = database.db.define("pessoa", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: database.db.Sequelize.STRING
            },
            idade: {
                type: database.db.Sequelize.INTEGER
            }
        })
    }
}

export default new Pessoa().model