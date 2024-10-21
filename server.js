// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // Configure Nodemailer with environment variables
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // Email sending endpoint using Nodemailer
// app.post('/send-email', (req, res) => {
//   const { name, email, subject, message } = req.body;

//   const mailOptions = {
//     from: email,
//     to: process.env.EMAIL_USER,
//     subject: subject || 'Contact from website',
//     text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error(error);
//       return res.status(500).send('Error sending email.');
//     }
//     res.status(200).send('Email sent successfully!');
//   });
// });

// // Listen on port 3002
// app.listen(3002, () => {
//   console.log('Server running on port 3002');
// });
