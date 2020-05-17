const credentials = require('./config/dbcredentials');

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'testtesttest12357956453423@gmail.com',
    pass: 'yourpassword'
  }
});

let mailOptions = {
  from: 'testtesttest12357956453423@gmail.com',
  to: 'myfriend@yahoo.com',
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