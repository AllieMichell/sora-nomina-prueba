var nodemailer = require('nodemailer');

const employeeModel = require('../models/employee');

const employeeContactController = {};

employeeContactController.sendMailPayroll = (req, res) => {
    const newEmail = {
        subject: req.body.subject,
        text: req.body.text
    }
    employeeModel.find({payrollStatus: req.body.payrollStatus == false}).sort({_id: -1}).exec((err, employee) => {
        var listMails = [];
        if(err){
            return res.status(500).json({
                status: false,
                message: 'All employees have been payroll',
                error: err
            })
        } else {
            // get all the mails
            for(var i = 0; i < employee.length; i++) {
                var mail = employee[i].mail;
                listMails.push(mail);
            }

            var transporter = nodemailer.createTransport({
                service: 'outlook',
                auth: {
                  user: 'pruebasallie@outlook.com',
                  pass: 'Pru3b45alli3'
                }
              });
              
            var mailOptions = {
                from: 'pruebasallie@outlook.com',
                to: listMails,
                subject: `${newEmail.subject}`,
                text: `${newEmail.text}`
            };
              
            transporter.sendMail(mailOptions, function(err, info){
                if (err) {
                    return res.status(500).json({
                        status: false, 
                        message: 'Could not send email',
                        error: err
                    })
                } else {
                    return res.status(200).json({
                        status: true,
                        message: 'Email sent successfully',
                        data: info
                    })
                    // console.log('Email sent: ' + info.response);
                }
            });
        }
    });
}

module.exports = employeeContactController;