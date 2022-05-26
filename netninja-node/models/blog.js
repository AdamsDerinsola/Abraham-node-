// 1. MAKE A SCHEMA TO DEFINE THE STRUCTURE
// 2. CREATE A MODEL BASED ON THAT SCHEMA AND DEFINE THE NAME


const mongoose = require('mongoose');
const Schema = mongoose.Schema; //constructor function to create new schema

const blogSchema = new Schema({ //creates a new instance of schema object
    title : {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true } )//generates timestamp property 

const Blog = mongoose.model('Blog', blogSchema);

module.exports =  Blog;