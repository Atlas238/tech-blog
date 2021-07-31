const User = require('./User');
const Blogpost = require('./Blogpost');

User.hasMany(Blogpost);

Blogpost.hasOne(User, {
    foreignKey: 'post_author'
});
