const express = require('express');
const router = express.Router();

// Array to store students (in place of a database for this example)
let students = [
  { id: 1, name: "Ankit", email: "ankit@example.com" },
  { id: 2, name: "Suraj", email: "suraj@example.com" },
  { id: 3, name: "Prashant", email: "prashant@example.com" },
  { id: 4, name: "Ravi", email: "ravi@example.com" }
];

// Create student form
router.get('/new', (req, res) => {
  res.render('newStudent');
});

// Create a student
router.post('/', (req, res) => {
  const { name, email } = req.body;
  const newStudent = { id: students.length + 1, name, email };
  students.push(newStudent);
  res.redirect('/students');
});

// List all students
router.get('/', (req, res) => {
  res.render('students', { list: students });
});

// Get single student details
router.get('/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (student) {
    res.render('studentDetail', { student });
  } else {
    res.status(404).send('Student not found');
  }
});

module.exports = router;
