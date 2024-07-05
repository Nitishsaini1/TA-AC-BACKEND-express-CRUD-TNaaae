const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Product = require('./models/product');
const studentRoutes = require('./routes/students'); // Import student routes

// Connect to mongoose
mongoose.connect('mongodb://localhost:27017/sample').then(() => {
    console.log('Connected to MongoDB');
});

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // To parse form data

// Setup view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use('/students', studentRoutes);

app.get('/', (req, res) => {
    res.send('Welcome');
});

// Error handler middleware
app.use((req, res, next) => {
    res.status(404).send("Page not found");
});

// Listener
app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});
