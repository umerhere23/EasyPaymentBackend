const express = require('express');
const customerController = require('../Controller/customerController');

const router = express.Router();

router.get('/customers', customerController.findAllCustomers);

module.exports = router;
