var Userdb = require("../model/model");

var createUser = require("./create");
var updateUser = require("./update");
var findUser = require("./find");
var deleteUser = require("./delete");

exports.create = (req, res) => createUser(req, res, Userdb);
exports.update = (req, res) => updateUser(req, res, Userdb);
exports.find = (req, res) => findUser(req, res, Userdb);
exports.delete = (req, res) => deleteUser(req, res, Userdb);
