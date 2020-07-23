const router = require('express').Router();
const employeeController = require('../controllers/employeC'); 
const employeeMailContactController = require('../functions/mail');
const employeeSMSContactsController = require('../functions/sms');

router.get('/', (req, res) => {
    res.send('Employees route working')
});
// Routes
router.post('/addNewEmployee', employeeController.addNewEmployee);
router.get('/getAllEmployees', employeeController.getAllEmployees);
router.put('/updateEmployee/:_id', employeeController.updateEmployee);
router.delete('/deleteEmployee/:_id', employeeController.deleteEmployee);
// Special Routes Functions
router.post('/sendMail', employeeMailContactController.sendMailPayroll);
router.get('/sendSMS', employeeSMSContactsController.sedSMSPayroll);
module.exports = router;