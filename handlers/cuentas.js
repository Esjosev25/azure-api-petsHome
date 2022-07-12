const Singleton = require('../config/db').getInstance();
config = Singleton.config;

const sql = require('mssql');


module.exports.getCuentas = async () => {
    try {

        let pool = await sql.connect(config);
        let categorias = await pool.request().query("select * from CuentaDonacion");

        return categorias.recordsets[0];


    } catch (error) {
        console.error(error);

    }
}



module.exports.insertAccount = async (cuenta) => {
    try {
        const { noCuenta, banco, tipoCuenta } = cuenta
        let pool = await sql.connect(config);
        await pool.request()
            .input('NoCuenta', sql.VarChar(255), noCuenta)
            .input('Banco', sql.VarChar(255), banco)
            .input('TipoCuenta', sql.VarChar(255), tipoCuenta)
            .query('insert into CuentaDonacion values (@NoCuenta, @Banco, @TipoCuenta)');

        const res = await pool.request()
            .query('SELECT IDENT_CURRENT(\'cuentaDonacion\') as IDCuentaDonacion');
        return res.recordsets[0][0];


    } catch (error) {
        console.error(error);

    }
}

module.exports.insertAccountOrg = async (cuentaOrg) => {
    try {
        const { iDCuenta, iDOrganizacion } = cuentaOrg
        let pool = await sql.connect(config);
        await pool.request()
            .input('IDCuentaDonacion', sql.Int, iDCuenta)
            .input('IDOrganizacion', sql.Int, iDOrganizacion)
            .query('insert into CuentaDonacionOrg values (@IDCuentaDonacion, @IDOrganizacion)');

        const res = await pool.request()
            .query('SELECT IDENT_CURRENT(\'CuentaDonacionOrg\') as IDCuentaDonacionOrg');
        return res.recordsets[0][0];


    } catch (error) {
        console.error(error);
        console.log("error uwu");
    }
}
