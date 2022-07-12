const handlers = require('../../handlers/index');
const express = require('express');

const router = express.Router();
// @route   POST api/users
// @desc    post user
// @access  Public
router.post('/', async (req, res) => {
    try {
        const IDUser = req.body;

        const result = await handlers.users.insertUser(IDUser);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
module.exports = router;