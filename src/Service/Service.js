const db = require("../../db/db");

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
  const { waiter, seats, status, current_status, tableId } = data;
  try {
    const table = await db.query(
      `INSERT INTO tables (waiter,number_of_seats,status,current_status,tableID) VALUES(?,?,?,?,?)`,
      [waiter, seats, status, current_status, tableId]
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
