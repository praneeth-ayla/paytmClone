const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:7TJaFOLSF1g9GjIO@cluster0.sduruc7.mongodb.net/paytm");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minLength: 4
    },
    password: {
        type: String,
        required: true, minLength: 6
    },
});

const User = new mongoose.model('User', userSchema)


export default User

// module.exports = {
//     User
// }