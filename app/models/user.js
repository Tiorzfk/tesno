var sequelize = require('../../confiig').sequelize;

var User = sequelize.define('user', {
  nama: {
    type: Sequelize.STRING(30),
    field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  email: {
    type: Sequelize.STRING(30)
  }
  password: {
    type: Sequelize.STRING(30)
  }
  jk: {
    type: Sequelize.STRING(1)
  }
  tgl_lahir: {
    type: Sequelize.STRING(20)
  }
  telepon: {
    type: Sequelize.INTEGER(15)
  }
  status: {
    type: Sequelize.INTEGER(1)
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

module.exports.User=User;