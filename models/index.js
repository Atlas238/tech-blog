const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment');

User.hasMany(Blogpost);
Blogpost.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);

Blogpost.hasMany(Comment);
Comment.belongsTo(Blogpost);



module.exports = { User, Blogpost, Comment }