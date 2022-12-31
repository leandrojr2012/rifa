const Sequelize = require('sequelize')
const sequelize = require('../_database/db')

const Criador = sequelize.define('criadores',{
    idcriador:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome:{
        type: Sequelize.STRING,
    },
    email:{
        type: Sequelize.STRING,
    }

},{
    timestamps: false
});

module.exports = Criador