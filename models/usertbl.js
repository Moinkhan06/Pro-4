const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    price : {
        type : Number,
        require : true
    }
})

const userDB = mongoose.model('usertbl', userSchema);

module.exports = userDB;
