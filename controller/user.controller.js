const userService = require('../services/user.service');
const jwt = require('jsonwebtoken');
const registerUser = async (req, res) => {
   try {
    const { email } = req.body;

     // find if user already exists
     const user = await userService.findOneUser(email);
     // if yes throw error
     if(user) {
        res.status(401).json('user already exits')
     }
     // if no create user
     const newUser = await userService.createUser(req.body)

     // generate jwt token
     const token = jwt.sign({id: newUser._id}, 'Ifemoney', { expiresIn: '6days'})
     // pass user info and jwt token to the client

     res.json({
        user: newUser,
        token: token
     })
   } catch (error) {
        throw new Error(error)
   }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

     // find if user already exists
     const user = await userService.findOneUser(email);
     // if yes throw error
     if(!user) {
       return  res.status(500).json('user does not exits')
     }
     const isMatch = user.comparePassword(password);
     if (!isMatch) {
        return res.status(500).json('password does not match')
     }
     const token = jwt.sign({id: user._id}, 'Ifemoney', { expiresIn: '6days'})
     res.json({
        user,
        token
     })
    }
    catch (error) {
        throw new Error(error)

    }
}


const getUserProfile = async (req, res) => {
   const user = await userService.findOneUserById(req.user.id)
   res.json(user)
}


module.exports = {registerUser, getUserProfile, loginUser}