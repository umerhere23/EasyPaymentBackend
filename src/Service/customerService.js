const db = require('../../db/db');

exports.findAllCustomers = async function () {
    try {
        const [rows, fields] = await db.promise().query('SELECT * FROM customer');
        return rows;
    } catch (err) {
        console.error('Error in findAllCustomers:', err);
        throw err;
    }
};
