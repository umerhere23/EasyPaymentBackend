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
exports.GetAllMenus = async function () {
    try {
        const [rows, fields] = await db.promise().query('SELECT * FROM Menu');
        return rows;
    } catch (err) {
        console.error('Error in Menu:', err);
        throw err;
    }
};
exports.GetAllorderDetails= async function () {
    try {
        const [rows, fields] = await db.promise().query('SELECT * FROM orderdetails');
        return rows;
    } catch (err) {
        console.error('Error in orderdetails:', err);
        throw err;
    }
};


exports.GetAllorder= async function () {
    try {
        const [rows, fields] = await db.promise().query('SELECT * FROM  orders');
        return rows;
    } catch (err) {
        console.error('Error in orders:', err);
        throw err;
    }
};
