const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended: true}));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'));
});
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','about.html'));
});
app.post('/submit-form',(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
    console.log(`Recieved form submission:${name}`);
    res.send(`Thanks ${name}, your message has been received!,Your Email ID is ${email}, Subject is ${subject}, and your message is ${message}.`);
});
app.listen(PORT,()=>{
    console.log('Server is running on http://Localhost:' + PORT);
});
