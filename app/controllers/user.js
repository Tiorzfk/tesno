var user = require('../../config/sequelize').User;
var sequelize = require('../../config/sequelize').sequelize;

exports.index = function(req, res, next) {
    sequelize.query("SELECT * FROM `posting`", { type: sequelize.QueryTypes.SELECT}).then(function(users) {
        return res.json(users);
    });
};