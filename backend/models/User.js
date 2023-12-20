const mongoose = require("mongoose")

const Usershema = new mongoose.Schema({
    username: {
        type: string,
        required: true,
        unique: true
    },
    email: {
        type: string,
        required: true,
        unique: true
    },
    password: {
        type: string,
        required: true,
        min: 6
    }
    profileImg: {
        type: string,
        default: ""
    }
}, {timestamp: true})

module.exports = mongoose,model("User", UserSchema)