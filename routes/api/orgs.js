const handlers = require('../../handlers/index');
const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const IDOrg = req.body;

        const result = await handlers.orgs.insertOrg(IDOrg);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
})

module.exports = router;