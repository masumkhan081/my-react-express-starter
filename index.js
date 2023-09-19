const express = require("express");
const cors = require("cors");

const app = express();

app.get("/api/customers", cors(), (req, res) => {
  const customers = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Brad", lastName: "Traversy" },
    { id: 3, firstName: "Mary", lastName: "Swanson" },
  ];

  res.json(customers);
});

app.get("/api/salesman", cors(), (req, res) => {
  const customers = [
    { id: 1, firstName: "s", lastName: "s" },
    { id: 2, firstName: "s2", lastName: "l2" },
    { id: 3, firstName: "pussy", lastName: "fuck" },
  ];

  res.json(customers);
});
const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
