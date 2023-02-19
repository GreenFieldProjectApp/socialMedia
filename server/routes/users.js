const express = require('express');
const router = express.Router();

// Require controller modules.
const { getAllUsers, addUser, getOneUser,updateOneUser ,deleteOneUser} = require('../controllers/users');

/// USERS ROUTES ///

//GET request to fetch all users. NOTE This must come before route for id.
router.get('/getAllUsers', getAllUsers);
// GET request for one user.
router.get('/:id', getOneUser);
// POST request for creating a user.
// router.post('/add', addUser);
router.put('/updateUser/:id', updateOneUser);
router.delete('/deleteUser/:id',deleteOneUser)


module.exports = router;