const customerService = require('../Service/customerService');

exports.findAllCustomers = async function (req, res) {
    try {
        const customers = await customerService.findAllCustomers();
        res.json(customers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
 