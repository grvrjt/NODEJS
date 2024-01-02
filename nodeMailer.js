const nodeMailer = require("nodemailer");
const transporter = nodeMailer.createTransport({
    host:"smtp.forwardemail.net",
    port:465,
    secure:true,
    auth:{
        user:"PELACE-WITH-YOUR-ALIAS@YOUR-DOMAIN.COM",
        pass:"REPLACE-WITH-YOUR-CREATED-PASS"
    }
});

transporter.sendMail({
    from:"YOUR-EMAIL",
    to:"RECEIVER-EMAIL",
    subject:"SUBJECT-OF-EMAIL",
    text:"This is a test email"
});