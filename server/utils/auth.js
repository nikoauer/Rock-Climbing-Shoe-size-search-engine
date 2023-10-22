const jwt = require('jsonwebtoken');

const secretkey = 'confidential';
const duration = '1h';

module.exports = {
    // function for our authenticated routes
    authMiddleware: function (req, res, next) {
      let token = req.query.token || req.headers.authorization;
  
      if (req.headers.authorization) {
        token = token.split(' ').pop().trim();
      }
  
      if (!token) {
        return res.status(400).json({ message: 'You do not have a token!' });
      }
  
      // verification of token and then retrieving users data
      try {
        const { data } = jwt.verify(token, secretkey, { maxAge: duration });
        req.user = data;
      } catch {
        console.log('Invalid token');
        return res.status(400).json({ message: 'invalid token!' });
      }
      next();
    },

    // generate a token for when a user logins/signs up 
    signToken: function ({ username, email, _id }) {
        const payload = { username, email, _id };
    
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
      },
}