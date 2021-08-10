const { User } = require('../models');

const userdata = [
    {
       name: 'Jack Bentsen',
       password: 'password!',
    },
]

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;