const nodemailer= require('nodemailer');
const transporter=require('./../config/mailer');

// var transport = nodemailer.createTransport({
//     host: "sandbox.smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "01b2b3a42b4434",
//       pass: "fb4f164b488ae6"
//     }
//   });


const sendEmail = (email, token) => {
    const mailOptions = {
     from: 'niazi@gmail.com',
     to: email,
     subject: 'Email verification',
     html:
   '<p>Please click on the following link to verify your email address:</p>' +
   '<a href="http://localhost:3000/verify/' +
   token +
   '">http://localhost:3000/verify/' +
   token +
     '</a>',
   };
   
   transporter.sendMail(mailOptions, function (error, info) {
     if (error) {
       console.log('Error in sending email  ' + error);
       return true;
     } else {
      console.log('Email sent: ' + info.response);
      return false;
     }
    });
   };
   
 module.exports = sendEmail;