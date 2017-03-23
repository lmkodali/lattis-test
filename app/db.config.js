var Sequelize = require('sequelize');

var sequelize = new Sequelize('DB_lattis', 'root', '', {
  host: "localhost",
    dialect: "mysql",
    logging: function () {},
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    define: {
        timestamps: false,
        freezeTableName: true
    }
});
sequelize.authenticate().then(function(err) {
  console.log('Connection has been established successfully.');
}).catch(function (err) {
  console.log('Unable to connect to the database:', err);
});

module.exports = sequelize;