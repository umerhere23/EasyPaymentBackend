const express = require("express");
const Controller = require("../Controller/Controller");

const router = express.Router();

router.get("/customers", Controller.findAllCustomers);
router.post('/customers', Controller.addcustomers);

router.get("/Menu", Controller.GetAllMenu);

router.get('/ordersDetails',  Controller.GetorderDetails);
router.get('/orders',  Controller.Getorder);
router.post('/menuadd', Controller.addMenuItem);

router.post("/table", Controller.addTable);
router.get("/table", Controller.getTables);

router.post('/order', Controller.addOrder);
router.post('/login',  Controller.login);
router.post('/admin/add',  Controller.addAdmin);

module.exports = router;
