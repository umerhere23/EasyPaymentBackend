const  Service = require('../Service/Service');

exports.findAllCustomers = async function (req, res) {
    try {
        const customers = await  Service.findAllCustomers();
        res.json(customers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
exports.GetAllMenu = async function (req, res) {
    try {
        const Menu = await  Service.GetAllMenus();
        res.json(Menu);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.GetorderDetails = async function (req, res) {
    try {
        const orderDetails = await  Service.GetAllorderDetails();
        res.json(orderDetails);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.Getorder  = async function (req, res) {
    try {
        const order  = await  Service.GetAllorder ();
        res.json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.addMenuItem =async function (req, res) {
    const { ID, Name, Price, Ingredient, Status } = req.body;
    try {
        const newMenuItem = await Service.addMenuItem({ ID, Name, Price, Ingredient, Status });
        res.status(201).json(newMenuItem);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}