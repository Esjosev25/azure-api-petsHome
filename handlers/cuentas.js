var config = require('../config/db');
const sql = require('mssql');


module.exports.getCuentas = async () => {
    try {
        let pool = await sql.connect(config);
        let categorias = await pool.request().query("select * from CuentaDonacion");

        return categorias.recordsets[0];


    } catch (error) {
        console.log("error uwu");
    }
}



module.exports.insertAccount = async (cuenta) => {
    try {
        const { NoCuenta, Banco, TipoCuenta } = cuenta
        let pool = await sql.connect(config);
        await pool.request()
            .input('NoCuenta', sql.VarChar(255), NoCuenta)
            .input('Banco', sql.VarChar(255), Banco)
            .input('TipoCuenta', sql.VarChar(255), TipoCuenta)
            .query('insert into CuentaDonacion values (@NoCuenta, @Banco, @TipoCuenta)');

        const res = await pool.request()
            .query('SELECT IDENT_CURRENT(\'cuentaDonacion\') as IDCuentaDonacion');
        return res.recordsets[0][0];


    } catch (error) {
        console.error(error);
        console.log("error uwu");
    }
}

module.exports.insertAccountOrg = async (cuentaOrg) => {
    try {
        const { IDCuenta, IDOrganizacion } = cuentaOrg
        let pool = await sql.connect(config);
        await pool.request()
            .input('IDCuentaDonacion', sql.Int, IDCuenta)
            .input('IDOrganizacion', sql.Int, IDOrganizacion)
            .query('insert into CuentaDonacionOrg values (@IDCuentaDonacion, @IDOrganizacion)');

        const res = await pool.request()
            .query('SELECT IDENT_CURRENT(\'CuentaDonacionOrg\') as IDCuentaDonacionOrg');
        return res.recordsets[0][0];


    } catch (error) {
        console.error(error);
        console.log("error uwu");
    }
}
