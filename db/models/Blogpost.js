const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blogpost extends Model {}

Blogpost.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        post_title: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                len: [2, 100],
            },
        },
        post_content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        post_author: {
            type: DataTypes.STRING,
            allowNull: false,
            references:{
                model: 'User',
                key: 'id',
            },
        },
        post_date: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    }
);