const Service = require("../Service/Service");

exports.findAllCustomers = async function (req, res) {
  try {
    const customers = await Service.findAllCustomers();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.GetAllMenu = async function (req, res) {
  try {
    const Menu = await Service.GetAllMenus();
    res.json(Menu);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.GetorderDetails = async function (req, res) {
  try {
    const orderDetails = await Service.GetAllorderDetails();
    res.json(orderDetails);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.Getorder = async function (req, res) {
  try {
    const order = await Service.GetAllorder();
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addTable = async (req, res) => {
  try {
    const table = await Service.addTableService(req.body);
    return res.status(200).json({ message: "Table added successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Failed to add hotel" });
  }
};
exports.getTables = async (req, res) => {
  try {
    const tables = await Service.getAllTablesService();
    res.status(200).json(tables);
  } catch (error) {
    res.status(500).json({ message: "Failed to get tables" });
  }
};
exports.addMenuItem = async (req, res) => {
    try {
      const Menu = await Service.addMenuItem(req.body);
      return res.status(200).json({ message: "Menu added successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Failed to add Menu" });
    }
  };

  exports.addcustomers = async (req, res) => {
    try {
      const customer = await Service.addCustomer(req.body);
      return res.status(200).json({ message: " customers added successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Failed to add  customers" });
    }
  };

  exports.addOrder=async function (req, res) {
    const { Id, Status, placementTime, orderNo, Remarks, TableId, CustomerId } = req.body;
    if (!Id || !Status || !placementTime || !orderNo || !Remarks || !TableId || !CustomerId) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        await Service.addOrder({ Id, Status, placementTime, orderNo, Remarks, TableId, CustomerId });
        res.status(201).json({ message: "Order added successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}