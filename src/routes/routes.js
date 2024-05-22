const express = require('express');
const  Controller = require('../Controller/Controller');

const router = express.Router();

router.get('/customers', Controller.findAllCustomers);
router.get('/Menu',  Controller.GetAllMenu);


module.exports = router;
