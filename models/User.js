const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true,
                msg: 'Username must not contain any special characters.'
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                contains: "^[a-zA-z0-9!@#$&()\\-`.+,/\"]*$",
                msg: 'Password must contain at least one special character.'
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    },
);

module.exports = User;