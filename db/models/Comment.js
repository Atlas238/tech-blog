const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment_content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        comment_author: {
            type: DataTypes.STRING,
            allowNull: true,
            references: {
                model: 'User',
                key: 'user_name',
            },
        },
        comment_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        blogpost_id: {
            references: {
                model: 'Blogpost',
                key: 'id'
            },
        },
    }
)