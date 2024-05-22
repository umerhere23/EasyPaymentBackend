const express = require('express');
const app = express();
const port = 3000;
const customerController = require('./src/Controller/customerController');

 
app.get('/customers', customerController.findAllCustomers);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
