const Singleton = require('../config/db').getInstance();
config = Singleton.config;

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

    }
}

module.exports.getIDOrg = async (IDObjectOrg) => {
    try {

        let pool = await sql.connect(config);
        let res = await pool.request()
            .input('IDObjectOrganizacion', sql.VarChar, IDObjectOrg)
            .query('select IDOrganizacion as idOrganizacion from organizacion where IDObjectOrganizacion = @IDObjectOrganizacion');

        return res.recordsets[0][0];

    } catch (error) {
        console.error(error);
        console.log("error uwu");
    }
}

module.exports.getCuentasOrg = async (IDOrganizacion) => {
    try {
        let pool = await sql.connect(config);
        let categorias = await pool.request()
            .input('IDOrganizacion', sql.Int, IDOrganizacion)
            .query(`select IDCuenta, NoCuenta, Banco, TipoCuenta from CuentaDonacionOrg  as CDO
            JOIN CuentaDonacion as CD on  CD.IDCuenta = CDO.IDCuentaDonacion
            Where CDO.IDOrganizacion = @IDOrganizacion`);

        return categorias.recordsets[0];


    } catch (error) {
        console.error(error);
        console.log("error uwu");
    }
}