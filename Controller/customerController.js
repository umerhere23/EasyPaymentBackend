const customerService = require('../Service/customerService');

async function findAllCustomers(req, res) {
    try {
        const customers = await customerService.findAllCustomers();
        res.json(customers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    findAllCustomers,
};
