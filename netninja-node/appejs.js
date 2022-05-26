const express = require ('express');
const morgan = require ('morgan')
const mongoose = require ('mongoose')

const { result } = require('lodash');
const blogRoutes = require('./routes/blogRoutes')

// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://AdamsDerinsola:adams1122@nodetuts.sgeguvp.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI)
    // listen for requests
    .then((result) => app.listen(3000) , console.log('connected to db'))
    .catch((err) => console.log(err))
// register view engine
// the set method allow us configure some application setting
app.set('view engine', 'ejs');
// app.set('views', 'name of folder containing views')


// middleware and static files
app.use(express.static('public'));
// the below line helps in accepting form data
app.use(express.urlencoded({ extended: true}))//takes all the urlencoded data and passes it to req object
app.use(morgan('dev'))

// // mongoose and mongo sanbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog 2',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });

//     // SAVING
//     blog.save() // saves to data base (this method is used on an instance of the BLOG model)
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// })

// // FIND ALL BLOGS
// app.get('/all-blogs', (req, res) => {
//     Blog.find() //the find method is used directily on the BLOG model
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// })

// FIND BLOG BASED ON ID
// app.get('/single-blog', (req, res) => {
//     Blog.findById('628d4e0989eda13894472a39')
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// })

// request responses
// Home page
// routes
// BASIC ROUTES!!!
app.get('/', (req, res) => {         //we wish to render a view and not send a file
    res.redirect('/blogs');
});

// About page
app.get('/about', (req, res) => {
    res.render('about',  { title: 'About'});
});

// blog routes
app.use('/blogs', blogRoutes)

// 404 page (the use method helps create middleware)
app.use((req, res) => {
    res.status(404).render('404',  { title: '404'})
});