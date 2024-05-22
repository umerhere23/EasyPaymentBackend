const db = require('../db/db');

async function findAllCustomers() {
    const customers = await db.query('SELECT * FROM customers');
    return customers;
}

module.exports = {
    findAllCustomers,
};
