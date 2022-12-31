const Sequelize = require('sequelize')
const sequelize = require('../_database/db')

const Rifas = sequelize.define('rifas',{
    idrifas:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    idcriador:{
        type: Sequelize.INTEGER,
    },
    nome:{
        type: Sequelize.STRING,
    },
    dataInicio:{
        type: Sequelize.STRING,
    },
    idstatusRifas:{
        type: Sequelize.INTEGER,
    }

},{
    timestamps: false
});

module.exports = Rifas