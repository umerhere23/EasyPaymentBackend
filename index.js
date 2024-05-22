const express = require('express');
const app = express();
const port = 3000;
const customerController = require('../EasyPaymentBackend/Controller/customerController');

 
app.get('/customers', customerController.findAllCustomers);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
