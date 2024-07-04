const verifyJwt = require('../utilities/jwt');



function isAuth(req, res, next) {
  try {
    // gets auth token from client
    const accessToken = req.headers.authorization?.split(' ')[1] || '';

    if (!accessToken) return next();

    // decodes the token into the signed object
    const decoded = verifyJwt(accessToken);
    if (decoded) {
      // passes decoded token into the req object as req.user
      req.user = decoded;
    }else {
        res.status(403).send('Forbidden')
    }

    return next();
  } catch (err) {
    console.log(err);
  }
}

module.exports = isAuth;
