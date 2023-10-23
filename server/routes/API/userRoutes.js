const router = require('express').Router();
const {signupUser, loginUser} = require('../../config/connection');

const { auth } = require('../../utils/auth')

router.route('/signup').post(signupUser).put(auth)

router.route('/login').post(loginUser)

module.exports = router;