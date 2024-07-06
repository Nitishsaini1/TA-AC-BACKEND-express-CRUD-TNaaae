const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const userRouter = require('./routes/users');

//initiate the app
var app = express();

//connect to mongodb 

mongoose.connect('mongodb://localhost/user-dairy').then(()=>console.log("connect to mongodb"))


//middlewares
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

//routes

app.use('/users', userRouter)
app.get('/', (req,res)=>{
    res.redirect('/users');
})

//error handler middleware

app.use((res,res)=>{
    res.status(404).send("Page not found");
});

//listener 
app.listen(3001, ()=>{
    console.log('Server is listening on port 3001')
})