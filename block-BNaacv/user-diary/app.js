// const express = require('express');
// const mongoose = require('mongoose');
// // const bodyParser = require('body-parser');
// // const methodOverride = require('method-override');
// const path = require('path');
// const usersRouter = require('./routes/users');

// //initiate the app
// var app = express();

// //connect to mongodb
// mongoose.connect('mongodb://localhost/user-dairy').then(()=>console.log("connect to mongodb"))

// //middlewares
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'))

// app.use(express.urlencoded({extended:false}))
// //routes
// app.get('/', (req,res)=>{
//     res.render('index.ejs')
// });
// app.use('/users', usersRouter)
// // app.get('/', (req,res)=>{
// //     res.redirect('/users');
// // })

// //error handler middleware

// app.use((req,res)=>{
//     res.status(404).send("Page not found");
// });

// //listener
// app.listen(3001, ()=>{
//     console.log('Server is listening on port 3001')
// })

// server.js
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
// const methodOverride = require('method-override');
const userRouter = require("./routes/users");

const app = express();

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/user-diary")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride('_method'));
// app.use(express.static(path.join(__dirname, 'public')));

// Set up view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/users", userRouter);

// Error handler middleware
app.use((req, res, next) => {
  res.status(404).send("Page not found");
});

// Listener
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
