var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'allie_michell@hotmail.com',
    pass: 'pinocho118'
  }
});

var mailOptions = {
  from: 'allie_michell@hotmail.com',
  to: 'alliemfs@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});