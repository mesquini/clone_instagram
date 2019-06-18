const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nickname: String,
    email: String,
    senha: String,
    gallery:{
        type: String,
        default : null
    }
},{
    timestamps: true
})

module.exports = mongoose.model('User',  UserSchema)