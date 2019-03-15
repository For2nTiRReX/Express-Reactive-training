const router = require('express').Router();
const {customerService} = require('./customers-service')

router.get('', (req, res) => {
    // async:

    customerService.getAll()
        .then((costumers) => res.json(costumers)) 
    
    // -> res.headersSent ??
    // sync:
    // res.json(customerService.getAll())
})

exports.customersController = router;
