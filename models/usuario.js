const Sequelize = require('sequelize');
const sequelize = require('../models/db');

const Usuario = sequelize.define('usuario', {
        //atributes
        id: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        usuario: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        rol: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        //options
        //Para que no busque los campos createAt, updateAt
        timestamps: false,
        //Para que cuando consultemos el modelo, no nos regrese la contraseña
        defaultScope: {
            attributes: { exclude: ['password'] },
        } 
    }
);

module.exports = Usuario;