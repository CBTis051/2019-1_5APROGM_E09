const Sequelize = require('sequelize');

//Conexión a la Base de datos con sequelize
const sequelize = new Sequelize('proyecto', 'root', 'Equipo09.051-', {
    host: 'al17239.systems',
    dialect: 'mysql'
});

sequelize 
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfuly.');
    })
    .catch(err => {
        console.error('Unable to connect to the database', err);
    });

module.exports = sequelize;

