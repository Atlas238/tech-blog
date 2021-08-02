const router = require('express').Router();
const { User, Blogpost, Comment } = require('../models');

// GET all blogposts for homepage
router.get('/', async (req, res) => {
    try {
        const blogsData = await Blogpost.findAll();
        const blogs = Object.values(JSON.parse(JSON.stringify(blogsData)));
        console.log(blogs);
        res.status(200).render('homepage', { blogs });
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET single blogpost with comments
router.get('/blogposts/:id', async (req, res) => {
    try {
        const blogData = await Blogpost.findOne({
            where: {
                id: req.params.id,
            },
        });
        console.log(blogData);
        res.status(200).render('singlepost', { blogData })
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;