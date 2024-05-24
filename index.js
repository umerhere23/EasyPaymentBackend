const express = require('express');
const app = express();
const port = 3001;
const  Controller = require('./src/routes/routes');

app.use('/customer',  Controller);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.use((req, res, next) => {
  res.status(404).send('No Route Found');
});
