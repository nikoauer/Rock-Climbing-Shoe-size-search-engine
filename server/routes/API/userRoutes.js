const router = require('express').Router();
const {signupUser, loginUser} = require('../../config/connection');

router.route('/signup').post(signupUser)

module.exports = router;