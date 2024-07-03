const UserModel = require('../schema/user.schema')

class UserService {
    async createUser (userInfo) {
        const newUser = new UserModel(userInfo);
        return newUser.save();
    }

    async findOneUser (email) {
        const user = await UserModel.findOne({email: email});
        return user
    }
}

module.exports = new UserService();