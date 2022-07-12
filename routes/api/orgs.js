const handlers = require('../../handlers/index');
const express = require('express');

const router = express.Router();
// @route   POST api/orgs
// @desc    post org
// @access  Public
router.post('/', async (req, res) => {
    try {

        const IDOrg = req.body;

        const result = await handlers.orgs.insertOrg(IDOrg);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// @route   POST api/orgs
// @desc    post org
// @access  Public
router.get('/', async (req, res) => {
    try {

        const { IDOrganizacion } = req.params;

        const result = await handlers.orgs.getIDOrg(IDOrganizacion);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// @route   POST api/orgs
// @desc    post org
// @access  Public
router.get('/cuentas', async (req, res) => {
    try {
        const { IDOrganizacion } = req.body;

        const result = await handlers.orgs.getCuentasOrg(IDOrganizacion);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
module.exports = router;