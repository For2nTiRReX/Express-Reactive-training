const router = require('express').Router();
const {customerService} = require('./customers-service')

router.get('', (req, res) => {
    res.json(customerService.getAll())
})

exports.customersController = router;
