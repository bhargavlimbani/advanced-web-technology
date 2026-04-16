const userModel = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class AuthenticationService {
    async registerUser(name, email, pwd) {
        const user = userModel.findOne({ email })
        if (user) {
            return'User already exists!'
        }
        user = new User({name, email, password})
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
    }
}
module.exports = new AuthenticationService()