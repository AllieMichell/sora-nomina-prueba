
const cron = require('node-cron');
const Nexmo = require('nexmo');
const request = require('request');
const dotenv = require('dotenv').config();

const employeeModel = require('../models/employee');

const employeeContactController = {};
// config nexmo
const nexmo = new Nexmo({
    apiKey: '700ffff2',
    apiSecret: 'h7uCyFacUNHbYQKP',
});


cron.schedule('0 0 12 15,29 * *', () => {
    request(`http://${process.env.DB_API}/v0.0.1/sora-nomina/employee/sendSMS`, (err, response) => {
        if(err){
            console.log('Could not send automatic SMS', err)  
        } else {
            console.log('Automatic SMS successful')
        }
    })
})

employeeContactController.sedSMSPayroll = (req, res) => {
    employeeModel.find({}).sort({_id: -1}).exec((err, employees) => {
        if(err){
            return res.status(500).json({
                status : false,
                message: 'Could not send SMS',
                error: err
            })
        } else {
            // for(var i = 0; i < employees.length; i++){
                // var phone = employees[i].phone;
                const from = 'Sora nomina';
                const to = '528129372690';
                const text = 'Te recordamos firmar tu recibo de nomina';   
                nexmo.message.sendSms(from, to, text, function(err){
                    if(err){
                        return res.status(500).json({
                            status: false,
                            message: 'Could not send SMS',
                            error: err
                        })
                    } 
                    return res.status(200).json({
                        status: true,
                        message: 'Send SMS successfully'
                    })
                })
            // }
        }
    })
}

module.exports = employeeContactController;