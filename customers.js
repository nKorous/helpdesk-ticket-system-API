const express = require('express')

const app = express()
const router = express.Router()

let CUSTOMERS = [
    {
        customerKey: 1,
        customerName: 'Alpha Customer 1',
        customerPhone: '5551234567',
        dateCreated: new Date(),
        isActive: true,
    },
    {
        customerKey: 2,
        customerName: 'Beta Customer 2',
        customerPhone: '5559876543',
        dateCreated: new Date(),
        isActive: true
    }
]

router.get('/allCustomers', async (req, res) => {
    res.status(200).send(CUSTOMERS)
})

router.get('/customer', async (req, res) => {
    const customerKey = Number(req.query.customer)

    foundCustomer = CUSTOMERS.find(c => c.customerKey === customerKey)

    if(foundCustomer) res.status(200).send(foundCustomer)
    else res.status(200).send([])
})

router.post('/customer', async (req, res) => {
    const newCustomer = req.body

    console.log(newCustomer)

    CUSTOMERS = [...CUSTOMERS, 
        { customerKey: getNextIndex(), ...newCustomer}]

    res.status(200).send(CUSTOMERS)
})

router.put('/customer', async (req, res) => {
    const putCustomer = req.body

    let customerIndex = CUSTOMERS.findIndex(fi => fi.customerKey === putCustomer.customerKey )

    CUSTOMERS[customerIndex] = { ...putCustomer }
    
    res.status(200).send(CUSTOMERS)
})





//private functions
function getNextIndex() {
    return CUSTOMERS.sort((a, b) => a.customerKey > b.customerKey ? 1 : b.customerKey > a.customerKey ? 0 : -1)[CUSTOMERS.length - 1].customerKey +1
}


module.exports = router