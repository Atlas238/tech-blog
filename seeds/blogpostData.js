const { Blogpost } = require('../models');

const blogpostdata = [
    {
        title: "OOP's The way to B",
        content: 'Object oriented programing is the best!',
        date: new Date,
        author: 1,
    },
    {
        title: "Javascript? JavaScropmt!",
        content: 'I love javascript - es6 is amazing!',
        date: new Date,
        author: 1,
    },
]

const seedBlogpost = () => Blogpost.bulkCreate(blogpostdata);
module.exports = seedBlogpost;