const express = require('express')
const blogController = require('../controllers/blogController')//import blog controller module

const router = express.Router() //creates a new instance of router object and now we can attach the req
// handlers to the router


// BLOG ROUTES!!!!
// displays all blogs
router.get('/', blogController.blog_index)

//add blog
router.post('/', blogController.blog_create_post)

// get Create page
router.get('/create', blogController.blog_create_get)

// get blog details
router.get('/:id', blogController.blog_details)

// delete blog
router.delete('/:id', blogController.blog_delete)

module.exports = router;