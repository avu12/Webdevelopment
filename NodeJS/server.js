const express = require('express');
const app =  express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.get('/',(req,res) => {
    console.log(req.query);
    //We can have these informations!
    //req.body
    //req.headers
    //req.params
    res.send("getting rooute")
});

app.get('/profile',(req,res) => {
    //res.send("getting profile")
    res.status(404).send("not found");
});



app.post('/profile',(req,res) => {
    console.log(req.body);
    const user = {
        name : 'Example',
        hobby: 'ExampleHoby'
    }
    
    res.send(user)
});

app.use(express.static(__dirname + "/public"))

app.listen(3000);