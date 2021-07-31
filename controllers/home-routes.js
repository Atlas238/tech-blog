const router = require('express').Router();
const { User, Blogpost } = require('../db/models');

// GET all blogposts for homepage
router.get('/', async (req, res) => {
    try {
        const blogData = await Blogpost.findAll({
            include: [
                {
                    model: User,
                    attributes: ['user_name'],
                },
            ],
        });
        
        const blogposts = blogData.map((blogs) => {
            blogs.get({ plain: true })
        });

        res.render('homepage', { blogposts })

    } catch (err) {
        res.status(400).json(err);
    }
});