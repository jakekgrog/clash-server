const mongoose = require("mongoose")
const beautifyUnique = require('mongoose-beautiful-unique-validation')
const bcrypt = require('bcryptjs')
const FlakeId = require('flakeid')
const flake = new FlakeId()
const {
    Schema
} = mongoose
const generateString = require('../utils/generateString')

const userSchema = new Schema({
    id:{
        type: String,
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email has not been entered"],
        minlength:[5, "Email must be longer than 5 characters"],
        unique: true
    },
    username: {
        type: String,
        required: [true, "Username has not been entered"],
        minlength: [3, "Username must be longer than 3 characters"]
    },
    tag: {
        type: String,
        minlength: 4
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
        select: false
    },
    lastSeen: {
        type: Number,
        default: 0,
        select: false
    },
    avatar: {
        type: String,
        default: 'default.png'
    },
    status: {
        type: Number,
        default: 1,
        enum: [
            0, // Offline
            1, // Online
            2, // Away
            3 //Busy
        ]
    },
    created_at: {
        type: Number
    },
    badges: {
        type: [{type: Number}],
        select: false
    }
})

usersSchema.pre('save', async function(next) {
    try {
        const salt = await bcrypt.genSalt(10)
        const passwordHash = await bcrypt.hash(this.password, salt)
        this.password = passwordHash

        this.id = flake.gen();
        this.tag = generateString(4);
        this.created_at = Date.now();
        next();
    } catch (err) {
        next(err);
    }
})

userSchema.methods.verifyPassword = async (password) => {
    try {
        return await bcrypt.compare(password, this.password);
    } catch(error) {
        throw new Error(error);
    }
}

userSchema.plugin(beautifyUnique);

const User = mongoose.model('user', userSchema);

module.exports = User;
