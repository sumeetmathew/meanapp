<<<<<<< HEAD
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: 'pitwaspatel@ymail.com',
    pass: 'P!%W@$99'
  }
});

var mailOptions = {
  from: 'pitwaspatel@ymail.com',
  to: 'mathew.dreams88@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
=======
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: 'pitwaspatel@ymail.com',
    pass: 'P!%W@$99'
  }
});

var mailOptions = {
  from: 'pitwaspatel@ymail.com',
  to: 'mathew.dreams88@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
>>>>>>> fe42303a10bede8cf26c19467e36d49e397efa54
});