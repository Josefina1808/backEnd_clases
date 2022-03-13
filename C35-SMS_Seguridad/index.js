import { createTransport } from "nodemailer";

const TEST_MAIL = "giuseppe.ratke54@ethereal.email";

const transporter = createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: TEST_MAIL,
    pass: "pvcQqsk8YxBm1rNDje",
  },
});

const mailOptions = {
  from: "Servidor Node.js",
  to: TEST_MAIL,
  subject: "Mail de prueba desde Node.js",
  html: '<div><h1 style="color: red;">Hola!</h1><br><h1 style="color: black;">Esto es un mail de pruba desde <span style="color: green;">Node.js</span></h1></div>',
};

try {
  const info = await transporter.sendMail(mailOptions);
  console.log(info);
} catch (err) {
  console.log(err);
}
