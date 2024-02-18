const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:7TJaFOLSF1g9GjIO@cluster0.sduruc7.mongodb.net/paytm");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, trim: true,
        lowercase: true,
        minLength: 4
    },
    password: {
        type: String,
        required: true, minLength: 6
    }, firstname: {
        type: String,
        required: true, trim: true,
    },
    lastname: {
        type: String,
        required: true, trim: true,
    }
});



const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    balance: {
        type: Number,
        required: true
    }
})

const User = mongoose.model('User', userSchema)
const Account = mongoose.model('Account', accountSchema)


module.exports = {
    User,
    Account
}