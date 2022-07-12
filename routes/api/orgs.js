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


// @route   Get api/orgs
// @desc    pGetost org
// @access  Public
router.get('/:id', async (req, res) => {
    try {

        const IDObject = req.params.id;

        const result = await handlers.orgs.getIDOrg(IDObject);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// @route   POST api/orgs
// @desc    post org
// @access  Public
router.get('/cuentas/:id', async (req, res) => {
    try {
        const IDOrganizacion = req.params.id;

        const result = await handlers.orgs.getCuentasOrg(IDOrganizacion);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
module.exports = router;