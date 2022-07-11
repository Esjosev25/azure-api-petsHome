const express = require('express');
const router = express.Router();



// @route   POST api/users
// @desc    Get all users
// @access  Public

router.get('/', (req, res) => {
    res.send('Profile route');
}
);
module.exports = router;