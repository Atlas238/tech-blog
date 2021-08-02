const { Comment } = require('../models');

const commentData = [
    {
        content: 'Wow what a cool comment system!',
        date: new Date,
        author_id: 2,
        blogpost_id: 1,
    }
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;