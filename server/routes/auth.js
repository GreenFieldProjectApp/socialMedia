const express = require('express');
const router = express.Router();
const verifyAuth = require('../middleware/VerifyAuth')
// Require controller modules.
const { logIn,signUp,signOut,checkAuth } = require('../controllers/auth');

/// USERS ROUTES ///

//GET request to fetch all users. NOTE This must come before route for id.
router.post('/signout', signOut);
// GET request for one user.

// POST request for creating a user.
// router.post('/add', addUser);
router.post('/signin', logIn);
router.post('/signup',signUp)
router.get('/checkAuth',verifyAuth,checkAuth )


module.exports = router;