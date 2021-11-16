const express = require('express');
const router = express.Router();
const controller = require('./controller/usersController');
const multer = require('multer');
const upload = multer()

// USers
router.get('/', controller.list);

router.post('/login', upload.none(), controller.login);

// POSTS

router.get('/post', controller.listPost);

router.post('/post', upload.none(), controller.listPostCategory);

// Users and Projects
router.post('/myProjects', upload.none(), controller.myProjects);

// router.post('/post_id', upload.none(), controller.postId);

// router.post('/post', controller.listPostCategory);


module.exports = router;
