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
exports.addMenuItem = async function ({ ID, Name, Price, Ingredient, Status }) {
    try {
        const text = 'INSERT INTO Menu (ID, Name, Price, Ingredient, Status) VALUES (?, ?, ?, ?, ?)';
        const values = [ID, Name, Price, Ingredient, Status];
        const [result] = await db.promise().query(text, values);
        const newMenuItemId = result.insertId;
        const [rows] = await db.promise().query('SELECT * FROM Menu WHERE ID = ?', [newMenuItemId]);
        return rows[0];
    } catch (err) {
        console.error('Error in addMenuItem:', err);
        throw err;
    }
};