const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");


router.get('/', (req, res)=>{
  res.send("Server running")
})

router.post("/sendmail", (req, res) => {

  let { name, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'Gmail',
  
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS 
    }
  });

  transporter.sendMail({

    from: '"Desde muerte.ink" <ejemplo@correo.com>',
  
    to: process.env.EMAILSERVER,
  
    subject: 'Cliente nuevo', 
  
    text: message,
  
    html: `<div style="text-align:center";>
    <h1>Muerte.Ink</h1>
    <img src="https://res.cloudinary.com/muerte-ink/image/upload/v1596839054/Project/logo2_wlpih4.jpg" style="width:60%">
    <hr>
    <div style="text-align:left">
    <b>Mi nombre es ${name}</b>
    <br/>
    <b>Mi correo es ${email}</b>
    <hr>
    <b>${message}</b>
    </div>
    </div>
    `
  
  })
  
  .then(() => {
    res.json({'message': 'ok'})
  })
  
  .catch(error => console.log(error))


});


module.exports = router;