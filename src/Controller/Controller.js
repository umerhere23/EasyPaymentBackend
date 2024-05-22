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