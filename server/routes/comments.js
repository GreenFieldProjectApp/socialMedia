const express = require('express');
const router = express.Router();

// Require controller modules.
const { getAllComments, addComment ,updateComment,deleteComment} = require('../controllers/comments');

/// POSTS ROUTES ///

//GET request to fetch all comments for one specific post.
router.get('/:id', getAllComments);
// POST request for adding a new comment.
router.post('/add', addComment);
router.put('/updateComment/:id',updateComment)
router.delete('/deleteComment/:id',deleteComment)

module.exports = router;