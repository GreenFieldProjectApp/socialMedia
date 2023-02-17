const express = require('express');
const router = express.Router();

// Require controller modules.
const { getAllPosts, addPost, getOnePost ,updatePost, deleteOnePost,deleteAllPosts,getUserPosts} = require('../controllers/posts');

/// POSTS ROUTES ///

//GET request to fetch all posts. NOTE This must come before route for id.
router.get('/getAllPosts', getAllPosts);
// POST request for creating a new post.
router.post('/addOnePost', addPost);
router.put('/updateOnePost/:id',updatePost)
router.delete('/deleteOnePost/:id',deleteOnePost)
router.delete('/deleteAllPosts',deleteAllPosts)
router.get('/getUserPosts/:id',getUserPosts)


module.exports = router;