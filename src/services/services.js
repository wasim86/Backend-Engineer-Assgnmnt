const express= require("express")
const router= express.Router()
const CustomerControllers= require("../controllers/CustomerController")
const CardControllers= require("../controllers/CardController")

router.post("/Customer",CustomerControllers.createCustomer)
router.get("/Customer",CustomerControllers.getCustomerData)
router.delete("/Customer/:CustomerId",CustomerControllers.deleteCustomerData)

router.post("/Card",CardControllers.createCard)
router.get("/Card",CardControllers.getCardData)

module.exports= router