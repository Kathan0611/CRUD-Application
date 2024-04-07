
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "01b2b3a42b4434",
        pass: "fb4f164b488ae6"
    }
});

module.exports = transporter;