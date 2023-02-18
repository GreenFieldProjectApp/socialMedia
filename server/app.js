const express = require('express');
const cors = require('cors');
//Create an Express App
const app = express();
var cookieParser = require('cookie-parser')

//Require application Route modules
const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');
const commentsRoute = require('./routes/comments');
const authRoute = require('./routes/auth');
app.use(cookieParser())
//Middleware to parse incoming requests with JSON and urlencoded payloads
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
//Add Routes to the middleware handling path, specifying the respective URL path
app.use('/api/posts', postsRoute);
app.use('/api/users', usersRoute);
app.use('/api/comments', commentsRoute);

app.use('/api/auth', authRoute);

module.exports = app; // export the express app.