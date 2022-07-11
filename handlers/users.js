
var config = require('../config/db');
const sql = require('mssql');
module.exports.insertUser = async (req) => {
    try {

        const { IDObjectUser } = req;

        let pool = await sql.connect(config);
        let insertC = await pool.request()
            .input('IDObjectUsuario', sql.VarChar, IDObjectUser)
            .query('insert into usuario values (@IDObjectUsuario)');
        console.log(insertC);
        return 'Insertion OK';

    } catch (error) {
        console.error(error);
        throw error;
    }
}