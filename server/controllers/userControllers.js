const { User, Shoes } = require('../models/index');

const { signToken } = require('../utils/auth');

module.exports = {
    //signs up a new user
    async signupUser({ body }, res) {
        const user = await User.create(body);

        if (!user){
            return res.status(400).json({message: 'Something went wrong with signing up!'});
        }
        const token = signToken(user);
        res.json({ token, user });
    },
    //login function
    async loginUser({ body }, res) {
        const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email}]});

        if(!user) {
            return res.status(400).json({ message: 'This user was not found!'});
        }

        const CorrectPassword = await user.isCorrectPassword(body.password);

        if(!CorrectPassword) {
            return res.status(400).json({ message: 'This password is incorrect!'});
        }
        const token = signToken(user);
        res.json({ token, user });
    }

}