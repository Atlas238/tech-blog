const router = require('express').Router();
const { User, Blogpost, Comment } = require('../models');

// GET all blogposts for homepage
router.get('/', async (req, res) => {
    try {
        const blogsData = await Blogpost.findAll({
            include: {
                model: User,
                attributes: ['id', 'name'],
            }});
            // TODO: add map
        const blogs = blogsData.map((blog) => {
            return blog.get({plain: true});
        });
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
            include: [Comment],
        });
        console.log(blogData);
        const blogDetails = blogData.get({plain: true});
        console.log(blogDetails);
        res.status(200).render('singlepost', blogDetails);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;