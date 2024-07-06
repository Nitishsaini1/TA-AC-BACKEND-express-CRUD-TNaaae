// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');
// - list users
router.get('/', (req,res)=>{
    //handle action
    res.render('user.ejs')

})

// - new user form
router.get('/new', (req,res)=>{
    //render the create form
    res.render('userform.ejs')
})

router.post('/', (req,res)=>{
    //capture the form data

})

// - get single user details
router.get('/:id', (req,res)=>{
    //single user detail
    res.render('singleUser.ejs')
})
// - update user
router.get('/:id/edit', (req,res)=>{
    //edit form
})

router.put('/:id', (req,res)=>{
    //capture the data form
})

// - delete user
router.delete('/:id', (req,res)=>{
    //delete the user
})


module.exports = router;


// // routes/users.js
// const express = require('express');
// const router = express.Router();
// const User = require('../models/user');

// // GET: List users
// router.get('/', async (req, res) => {
//   const users = await User.find({});
//   res.render('users', { list: users });
// });

// // GET: Get single user details
// router.get('/:id', async (req, res) => {
//   const user = await User.findById(req.params.id);
//   res.render('singleUser', { user: user });
// });

// // GET: New user form
// router.get('/new', (req, res) => {
//   res.render('userForm');
// });

// // POST: Create a new user
// router.post('/', async (req, res) => {
//   const user = new User(req.body);
//   await user.save();
//   res.redirect('/users');
// });

// // DELETE: Delete a user
// router.delete('/:id', async (req, res) => {
//   await User.findByIdAndDelete(req.params.id);
//   res.redirect('/users');
// });

// // PUT: Update a user
// router.put('/:id', async (req, res) => {
//   await User.findByIdAndUpdate(req.params.id, req.body);
//   res.redirect('/users/' + req.params.id);
// });

// module.exports = router;
