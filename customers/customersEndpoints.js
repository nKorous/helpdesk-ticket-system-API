const router = require("express").Router();

const db = require('../db')

let CUSTOMERS = [
  {
    customerKey: 1,
    customerName: "Alpha Customer 1",
    customerPhone: "5551234567",
    dateCreated: new Date(),
    isActive: true,
  },
  {
    customerKey: 2,
    customerName: "Beta Customer 2",
    customerPhone: "5559876543",
    dateCreated: new Date(),
    isActive: true,
  },
  {
    customerKey: 3,
    customerName: "Charlie Customer 3",
    customerPhone: "5556567890",
    dateCreated: new Date(),
    isActive: false,
  },
];

router.get("/allCustomers", async (req, res) => {
  res.status(200).send(getAllCustomers());
});

router.get("/customer", async (req, res) => {
  const customerKey = Number(req.query.customer);

  const foundCustomer = getCustomerByKey(customerKey)

  if (foundCustomer) res.status(200).send(foundCustomer);
  else res.status(200).send([]);
});

router.post("/customer", async (req, res) => {
  const newCustomer = req.body;

  res.status(200).send(addNewCustomer(newCustomer));
});

router.put("/customer", async (req, res) => {
  const putCustomer = req.body;

  res.status(200).send(updateCustomer(putCustomer));
});

//Helper functions (PRIVATE)

function getNextIndex() {
  return CUSTOMERS.sort((a, b) => (a.customerKey > b.customerKey ? 1 : b.customerKey > a.customerKey ? 0 : -1))[CUSTOMERS.length - 1].customerKey + 1;
}

function getAllCustomers() {
  return CUSTOMERS;
}

function getCustomerByKey(customerKey) {
  return CUSTOMERS.find((f) => f.customerKey === customerKey);
}

function addNewCustomer(newCustomer) {
  CUSTOMERS = [...CUSTOMERS, { customerKey: getNextIndex(), ...newCustomer }];

  return CUSTOMERS;
}

function updateCustomer(customerInfo) {
  let customerIndex = CUSTOMERS.findIndex((fi) => fi.customerKey === customerInfo.customerKey);

  CUSTOMERS[customerIndex] = { ...customerInfo };

  return getAllCustomers();
}

module.exports = router;
