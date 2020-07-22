const mongoose = require('mongoose');
let collectionNeme = 'employee';
const employeeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        payrollStatus: {
            type: Boolean,
            required: true
        },
        mail: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true,
            maxLength: 10,
        },
        company: {
            type: String,
            required: true
        },
        payroll: {
            type: Number,
            required: true
        }
    },
    {
        collection: collectionNeme
    }
);

const Employee = mongoose.model(collectionNeme, employeeSchema);
module.exports  = Employee;