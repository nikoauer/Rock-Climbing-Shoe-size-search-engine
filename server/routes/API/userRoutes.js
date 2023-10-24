const router = require('express').Router();
const { signupUser, loginUser } = require('../../controllers/userControllers');

const { authMiddleware } = require('../../utils/auth')

router.route('/signup').post(signupUser).put(authMiddleware)

router.route('/login').post(loginUser)

module.exports = router;