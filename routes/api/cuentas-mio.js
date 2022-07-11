const express = require('express');
const router = express.Router();


// @route   Get api/cuentas
// @desc    Get all cuentas from an organization
// @access  Public

router.get('/org/:id', (req, res) => {
    console.log(req.params.id);
    res.send('Org route');
}
);

// @route   POST api/cuentas/org
// @desc    Get all cuentas from an organization
// @access  Public
router.post('/org', (req, res) => {
    //solicitar el id de la cuenta organizacion
    console.log(req.body);
    res.send('Org route');
}
);
module.exports = router;