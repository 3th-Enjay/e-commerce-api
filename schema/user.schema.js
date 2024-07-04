const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'first name is required']
    },

    lastname: {
        type: String,
        required: [true, "lastname is required"]
    },

    password: {
        type: String,
        select: false,
        required: [true, "password is required"],
        min: 6,
        max: 6,
    },

    email : {
        type: String,
        required: [true, "email is required"],
        unique: true,           
        lowercase: true,
        trim: true,
        validate: {
          validator: function (value) {
            return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value);
          },
          message: 'please enter a valid email',
        },
    }
}, {
    timestamps: true
});


userSchema.pre('save', async function (next) {
    if(this.isNew || this.isModified('password')) {
        const SALT_ROUNDS = 10;
        const hash = await bcrypt.hash(this.password, SALT_ROUNDS);
        this.password = hash;
        return next()
    };
})

userSchema.methods.comparePassword = async function comparePassword(password) {
    return await bcrypt.compare(password, this.password)
}

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;