const express=require('express');

const app = express();

app.get('/', function(req,res){
    res.end("Your are at Homepage");
});

app.get('/users', function(req,res){
    res.end("Your are at user page");
});

app.get('/mouli', function(req,res){
    return res.json({
        name:"Chandra Mouli",
        age:24,
        isActive:true,
        hobbies:["coding","Music"],
        address:{
            hNo:914,
            street:"Pillaiyar koil street",
            country:{
                code:'91',
                name:"India"
            }
        }
    })
})

app.post('/users', function(req,res){
    console.log(req.body);
    res.end("New User Created");
});

app.listen(8000, ()=> console.log("Server Started on PORT:8000")); 