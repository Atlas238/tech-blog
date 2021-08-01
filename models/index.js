const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment');

User.hasMany(Blogpost, {
    foreignKey: 'author_id',
});

User.hasMany(Comment, {
    foreignKey: 'author_id',
});

Comment.belongsTo(Blogpost, {
    foreignKey: 'blogpost_id',
});

module.exports = { User, Blogpost, Comment }