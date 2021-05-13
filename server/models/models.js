const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: "USER"
    }
});

const File = sequelize.define('file', {
    name: {
        type: DataTypes.STRING,
    },
    path: {
        type: DataTypes.STRING,
        defaultValue: ''
    },
    content: {
        type: DataTypes.TEXT,
        defaultValue: ''
    }
});

User.hasMany(File);

module.exports = {
    User, File
};
