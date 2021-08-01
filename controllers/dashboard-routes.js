const router = require('express').Router();
const { User, Blogpost } = require('../models');

// GET All User Posts ( Or send to log in/sign up screen/modal )
router.get('/', async (req, res) => {
    // try {
    //     // CHECK TO SEE IF LOGGED IN...

    //     // IF LOGGED...
    //     if () {
    //         const blogData = await Blogpost.getAll({
    //             where: {
    //                 id: req.session.userid
    //             }
    //         })
    //         res.render('dashboard', { blogposts });
    //     } else {
    //         // SEND TO SIGN UP
    //         res.render('signup');
    //     }

    //     // DISPLAY ALL USER POSTS

    // } catch (err) {
    //     res.status(400).json(err);
    // }
})