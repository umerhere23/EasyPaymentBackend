const db = require("../../db/db");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const crypto = require('crypto');

exports.findAllCustomers = async function () {
  try {
    const [rows, fields] = await db.promise().query("SELECT * FROM customer");
    return rows;
  } catch (err) {
    console.error("Error in findAllCustomers:", err);
    throw err;
  }
};
exports.GetAllMenus = async function () {
  try {
    const [rows, fields] = await db.promise().query("SELECT * FROM Menu");
    return rows;
  } catch (err) {
    console.error("Error in Menu:", err);
    throw err;
  }
};
exports.GetAllorderDetails = async function () {
  try {
    const [rows, fields] = await db
      .promise()
      .query("SELECT * FROM orderdetails");
    return rows;
  } catch (err) {
    console.error("Error in orderdetails:", err);
    throw err;
  }
};

exports.GetAllorder = async function () {
  try {
    const [rows, fields] = await db.promise().query("SELECT * FROM  orders");
    return rows;
  } catch (err) {
    console.error("Error in orders:", err);
    throw err;
  }
};

exports.addTableService = async (data) => {
  const {  status,Name, } = data;
  try {
    const table = await db.query(
      `INSERT INTO tables ( status,Name) VALUES(  ?,?)`,
      [status,Name,]
    );
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};
exports.getAllTablesService = async (req, res) => {
  try {
    const tables = await db.query("SELECT * FROM tables;");
    return tables;
  } catch (error) {
    throw new Error(error.message);
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

exports.addCustomer = async (data) => {
    const { Id, Name, PhoneNumber, Email } = data;
    try {
        const result = await db.promise().query(
            `INSERT INTO Customer (Id, Name, PhoneNumber, Email) VALUES (?, ?, ?, ?)`,
            [Id, Name, PhoneNumber, Email]
        );
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.addOrder = async function ({ Id, Status, placementTime, orderNo, Remarks, TableId, CustomerId }) {
    try {
        const text = 'INSERT INTO Orders (Id, Status, placementTime, orderNo, Remarks, TableId, CustomerId) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const values = [Id, Status, placementTime, orderNo, Remarks, TableId, CustomerId];
        const result = await db.promise().query(text, values);
        return result;
    } catch (err) {
        console.error('Error in addOrder:', err);
        throw err;
    }
};

exports.login = async function (username, password) {
  try {
      username = username.trim();
      password = password.trim();

      const [rows] = await db.promise().query('SELECT * FROM admin WHERE Username = ?', [username]);
      if (!rows || rows.length === 0) {
          throw new Error('Invalid username');
      }

      const admin = rows[0];

      console.log('Input Password:', password);
      console.log('Stored Password:', admin.Password);

      if (password !== admin.Password) { 
          throw new Error('Invalid password');
      }

      console.log('Admin Password:', admin.Password);
      console.log('Admin Email:', admin.Email);

      return { message: 'Login successful' };
  } catch (error) {
      throw error;  
  }
};

exports.addAdmin = async function (username, password, email) {
    try {
        const [existingAdmins] = await db.promise().query('SELECT * FROM Admin WHERE username = ?', [username]);
        if (existingAdmins.length > 0) {
            throw new Error('Admin with the same username already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const insertQuery = 'INSERT INTO Admin (username, password, email) VALUES (?, ?, ?)';
        await db.promise().query(insertQuery, [username, hashedPassword, email]);

        return { message: 'Admin added successfully' };
    } catch (error) {
        throw error;
    }
};
