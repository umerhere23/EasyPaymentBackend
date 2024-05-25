const express = require("express");
const Controller = require("../Controller/Controller");

const router = express.Router();

router.get("/customers", Controller.findAllCustomers);
router.get("/Menu", Controller.GetAllMenu);

router.get("/ordersDetails", Controller.GetorderDetails);
router.get("/orders", Controller.Getorder);

router.post("/table", Controller.addTable);
router.get("/table", Controller.getTables);
module.exports = router;
