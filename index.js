const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const routes = require("./src/routes/routes");

app.use(cors());
app.use(express.json());  

app.use("/customer", routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.use((req, res, next) => {
  res.status(404).send("No Route Found");
});
