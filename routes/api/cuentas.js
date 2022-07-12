const handlers = require('../../handlers/index');
const express = require('express');

const router = express.Router();



// @route   POST api/orgs
// @desc    post org
// @access  Public

router.post('/', async (req, res) => {
    try {
        const cuenta = req.body;

        const result = await handlers.cuentas.insertAccount(cuenta);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// @route   POST api/cuenta-orgs
// @desc    post cuenta-org
// @access  Public
router.post('/cuenta-org', async (req, res) => {

    try {

        const cuenta = req.body;

        const result = await handlers.cuentas.insertAccountOrg(cuenta);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

})

module.exports = router;