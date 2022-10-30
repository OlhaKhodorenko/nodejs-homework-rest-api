const signup = require("./signup");
const verify = require("./verify");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateAvatar = require("./updateAvatar");
const resendEmail = require("./resendEmail");

module.exports = {
  signup,
  verify,
  resendEmail,
  login,
  getCurrent,
  logout,
  updateAvatar,
};
