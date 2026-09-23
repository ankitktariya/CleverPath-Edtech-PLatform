const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async (email, title, body) =>{
    try {
        let transporter = nodemailer.createTransport({
            service:"Gmail",
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            },
            tls: {
        rejectUnauthorized: false, // ⚡ fix for self-signed cert
      }
        });

          let info = await transporter.sendMail({
            from: `Ankit-CleverPathAi <${process.env.MAIL_USER}>`, 
            to: `${email}`, 
            subject: `${title}`, 
            html: `${body}`, // plain text body
          });

            return info;
        
    } catch (error) {
        console.log("Error in mailSender", error.message);
    }
}

module.exports = mailSender;