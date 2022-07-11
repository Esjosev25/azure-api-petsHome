var config = require('../config/db');
const sql = require('mssql');

module.exports.insertOrg = async (req) => {
    try {
        const { IDObjectOrg } = req;
        let pool = await sql.connect(config);
        let insertC = await pool.request()
            .input('IDObjectOrganizacion', sql.VarChar, IDObjectOrg)
            .query('insert into organizacion values (@IDObjectOrganizacion)');
        return 'Insertion OK';


    } catch (error) {
        console.error(error);
        console.log("error uwu");
    }
}