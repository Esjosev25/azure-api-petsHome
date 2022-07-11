const dbcategoria = require('../../handlers/cuentas');
const express = require('express');
const router = express.Router();


//get
router.get('/', async (req, res) => {
    console.log('Hola');
    try {
        const result = await dbcategoria.getCuentas();
        res.json(result);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
})


//getNoCuenta

router.get('/:id', (req, res) => {
    dbcategoria.getCuentaID(req.params.id).then(result => {
        res.json(result[0]);
    })
})


//postCuenta

router.route('/agregar').post((req, res) => {
    let cuenta = { ...req.body }
    dbcategoria.insertCuenta(cuenta).then(result => {
        res.json(result[0]);
    })
})


//update

router.route('/modificar').post((req, response) => {
    let cuenta = { ...req.body }
    dbcategoria.updateCuenta(cuenta).then(result => {
        response.json(result[0]);
    })
})

//delete

router.delete('/borrar/:id', (req, res) => {
    dbcategoria.deleteCuenta(req.params.id).then(result => {
        res.json(result[0]);
    })
})


module.exports = router;