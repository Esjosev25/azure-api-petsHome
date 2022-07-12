const Singleton = require('../config/db').getInstance();
config = Singleton.config;

const sql = require('mssql');
module.exports.insertUser = async (req) => {
    try {

        const { IDObjectUser } = req;

        let pool = await sql.connect(config);
        let insertC = await pool.request()
            .input('IDObjectUsuario', sql.VarChar, IDObjectUser)
            .query('insert into usuario values (@IDObjectUsuario)');

        return 'Insertions OK';

    } catch (error) {
        console.error(error);
        throw error;
    }
}