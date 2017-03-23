let db = require('../../db.config');
let Sequelize = require('sequelize');


var users = db.define('users',{
   user_id: {
    type: Sequelize.STRING,
    autoIncrement : true,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING, 
    allowNull: false
  },
  password: {
    type: Sequelize.STRING, 
    allowNull: false
  }, 
  email: {
    type: Sequelize.STRING, 
    allowNull: false
  },
  phone_No: {
    type: Sequelize.STRING, 
    allowNull: false
  }
}); 

 
module.exports = users;

