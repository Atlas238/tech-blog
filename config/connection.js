const Sequelize = require('sequelize');
require('dotenv').config();

// ENV not working?
// const sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//         host: 'localhost',
//         dialect: 'mysql',
//         port: 3306,
//     }
// );

const sequelize = new Sequelize(
    'tech_blog_db',
    'root',
    'password',
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
    }
);

module.exports = sequelize;