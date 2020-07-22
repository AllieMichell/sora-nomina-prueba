const router = require('express').Router();
const employeeController = require('../controllers/employeC'); 

router.get('/', (req, res) => {
    res.send('Employees route working')
});
// Routes
router.post('/addNewEmployee', employeeController.addNewEmployee);
router.get('/getAllEmployees', employeeController.getAllEmployees);
router.put('/updateEmployee/:_id', employeeController.updateEmployee);
router.delete('/deleteEmployee/:_id', employeeController.deleteEmployee);
module.exports = router;