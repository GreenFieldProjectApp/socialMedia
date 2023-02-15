const express = require('express');
const router = express.Router();

// Require controller modules.
const { getAllPosts, addPost, getOnePost ,updatePost, deleteOnePost,deleteAllPosts,getUserPosts} = require('../controllers/posts');

/// POSTS ROUTES ///

//GET request to fetch all posts. NOTE This must come before route for id.
router.get('/getAllposts', getAllPosts);
// GET request for one post.
router.get('/:idpost', getOnePost);
// POST request for creating a new post.
router.post('/addOnePost', addPost);
router.put('/updateOnePost',updatePost)
router.delete('/deleteOnePost',deleteOnePost)
router.delete('/deleteAllPosts',deleteAllPosts)
router.get('/getUserPosts',getUserPosts)


module.exports = router;