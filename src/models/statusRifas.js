const Sequelize = require('sequelize')
const sequelize = require('../_database/db')

const StatusRifas = sequelize.define('statusrifas',{
    idstatusRifas:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    condicaoUm:{
        type: Sequelize.INTEGER,
    },
    condicaoDois:{
        type: Sequelize.STRING,
    },
    dataCondicaoUm:{
        type: Sequelize.STRING,
    },
    dataCondicaoDois:{
        type: Sequelize.INTEGER,
    }

},{
    timestamps: false
});

module.exports = StatusRifas