const employeeModel = require('../models/employee');

const employeeControllers = {};

// Add new Employee - CREATE
employeeControllers.addNewEmployee = (req, res) => {
    const newEmp = new employeeModel({
        name: req.body.name,
        payrollStatus: req.body.payrollStatus,
        mail: req.body.mail,
        phone: req.body.phone,
        company: req.body.company,
        payroll: req.body.payroll,
    });
    newEmp.save((err, employee) => {
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Fail to save',
                error: err
            });
        } 
        return res.status(200).json({
            status: true,
            message: 'Saved successfully',
            data: employee
        })
    })
}
// List all employees - READ
employeeControllers.getAllEmployees = (req, res) => {
    employeeModel.find({}).sort({_id: -1}).exec((err, employees) => {
        if(err){
            return res.status(500).json({
                status: false,
                message: 'Information not found',
                error: err
            })
        }
        return res.status(200).json({
            status: true,
            message: 'Information successfully found',
            data: employees
        })
    })
}
// Update one employee - UPDATE
employeeControllers.updateEmployee = (req, res) => {
    const updateEmp = {
        name: req.body.name,
        payrollStatus: req.body.payrollStatus,
        mail: req.body.mail,
        phone: req.body.phone,
        company: req.body.company,
        payroll: req.body.payroll,
    };
    employeeModel.updateOne({_id: req.params._id}, updateEmp, (err, employee) => {
        if(err){
            return res.status(500).json({
                status: false,
                message: 'Could not update',
                error: err
            })
        } 
        return res.status(200).json({
            status: true,
            message: 'Update successfully', 
            data: employee
        })
    })
}
// Delete employee - DELETE
employeeControllers.deleteEmployee = (req, res) => {
    employeeModel.remove({_id: req.params._id}, (err, employee) => {
        if(err){
            return res.status(500).json({
                status: false, 
                message: 'Could not delete', 
                error: err
            })
        } 
        return res.status(200).json({
            status: true,
            message: 'Successfully remove',
            data: employee
        })
    })
}
module.exports = employeeControllers;