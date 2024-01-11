const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authenticate = async (req, res, next) => {};

const adminAuth = (req, res, next) => {};

module.exports = {
  autorizeUser: authenticate,
};
