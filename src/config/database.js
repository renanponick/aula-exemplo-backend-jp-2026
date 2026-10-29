import { Sequelize } from 'sequelize'

class Database {
    constructor() {
        this.init()
    }
    
    // configurar a conexao
    init() {
        this.db = new Sequelize({
            dialect: 'postgres',
            database: 'exemplo_wig4',
            username: 'exemplo_wig4_user',
            password: 'FHUJFPXmadkCHxllP3JdB1eaen73MSmv',
            host: 'dpg-dbh79qjl550s73805pp0-a.oregon-postgres.render.com',
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
        })
    }
}

export default new Database()

    // configurar a conexao
    // init() {
    //     this.db = new Sequelize(
    //         'exemplo_wig4',
    //         'exemplo_wig4_user',
    //         'FHUJFPXmadkCHxllP3JdB1eaen73MSmv',
    //         {
    //             host: 'dpg-dbh79qjl550s73805pp0-a.oregon-postgres.render.com',
    //             port: 5432,
    //             dialect: 'postgres',
    //             dialectOptions: {
    //                 ssl: {
    //                     require: true,
    //                     rejectUnauthorized: false
    //                 }
    //             }
    //         }
    //     )
    // }