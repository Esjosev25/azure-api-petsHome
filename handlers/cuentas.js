var config = require('../config/db');
const sql = require('mssql');


module.exports.getCuentas = async () => {
    try {
        let pool = await sql.connect(config);
        let categorias = await pool.request().query("select * from CuentaDonacion");
        console.log(categorias);
        return categorias.recordsets[0];


    } catch (error) {
        console.log("error uwu");
    }
}

module.exports.insertCuenta = async (req, h) => {
    try {
        let pool = await sql.connect(config);
        let insertC = await pool.request()
            .input('IDCuenta', sql.int, CuentaDonacion.IDCuenta)
            .input('NoCuenta', sql.VarChar(255), CuentaDonacion.NoCuenta)
            .input('Banco', sql.VarChar(255), CuentaDonacion.Banco)
            .input('TipoCuenta', sql.VarChar(255), CuentaDonacion.TipoCuenta)
            .execute("SP_Cuentas");


        return insertC.recordsets;


    } catch (error) {
        console.log("error uwu");
    }
}


