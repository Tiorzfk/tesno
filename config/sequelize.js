var Sequelize = require('sequelize');

var sequelize = new Sequelize('comradedb', 'b8bf14d452d4b5', 'b1476b57', {
  host: 'ap-cdbr-azure-southeast-b.cloudapp.net',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

module.exports.sequelize=sequelize;