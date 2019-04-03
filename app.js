var express = require("express");
var app = express();
var nodemailer = require('nodemailer');

var router = express.Router();
app.use('/', router);
router.get('/', handleSayHello); 

function handleSayHello(req, res) {
    // Not the movie transporter!
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
          port: 465,
          secure: true,
        auth: {
            user: 'xxx@gmail.com', // Your email id
            pass: 'xxx' // Your password
        }
    });
    var text = 'Hello world from sunil';
    var mailOptions = {
        from: 'xxx@gmail.com', // sender address
        to: 'yyy@gmail.com', // list of receivers
        subject: 'Email Example', // Subject line
        text: text //, // plaintext body
        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json({yo: 'error'});
        }else{
            console.log('Message sent: ' + info.response);
            res.json({yo: info.response});
        };
    });
}
var server = app.listen(3000, () => {
  console.log("server is running on port", server.address().port);
});
