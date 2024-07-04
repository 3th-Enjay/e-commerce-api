const Jwt = require('jsonwebtoken');
const configVariables = require ('../config/config');

function verifyJwt(token) {
    try {
      const decoded = Jwt.verify(token, configVariables.JWT_SECRET);
      return decoded;
    } catch (e) {
      console.log(e);
    }
  }
  
module.exports = verifyJwt;