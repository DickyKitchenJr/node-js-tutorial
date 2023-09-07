const allowedOrigins = require('../config/allowedOrigins');

//if the orgin is in the allowed origins list, set the Access-Control-Allow-Credentials header to true so that CORS doesn't block it
const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    if(allowedOrigins.includes(origin)){
        res.header('Access-Control-Allow-Credentials', true);
    }
    next();
}

module.exports = credentials;