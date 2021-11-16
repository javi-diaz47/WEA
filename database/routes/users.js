const express = require('express');
const router = express.Router();
const controller = require('./controller/usersController');
const multer = require('multer');
const upload = multer()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true);
    }

}

const uploadImage = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
})

// USers
router.get('/', controller.list);

router.post('/login', upload.none(), controller.login);

// POSTS
router.get('/post', controller.listPost);

router.post('/post', upload.none(), controller.listPostCategory);

// Users and Projects
router.post('/myProjects', upload.none(), controller.myProjects);

// Update users

// router.post('/post_id', upload.none(), controller.postId);

// router.post('/post', controller.listPostCategory);


module.exports = router;
