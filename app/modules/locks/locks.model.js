let db = require('../../db.config');
let Sequelize = require('sequelize');


var locks = db.define('locks',{
   lock_id: {
    type: Sequelize.STRING,
    autoIncrement : true,
    primaryKey: true
  },
  name : {
    type: Sequelize.STRING, 
    allowNull: false
  },
  mac_id: {
    type: Sequelize.STRING, 
    allowNull: false
  }, 
  latitude: {
    type: Sequelize.STRING, 
    allowNull: false
  },
  longitude: {
    type: Sequelize.STRING, 
    allowNull: false
  }
}); 

 
module.exports = locks;

