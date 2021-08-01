const { User } = require('../models');

const userdata = [
    {
       name: 'Jack Bentsen',
       password: 'password!',
    },
    {
        name: 'John Doe',
        password: 'Deer13$',
    },
    {
        name: 'Jenny Dear',
        password: 'DeAr88@',
    }
]

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;