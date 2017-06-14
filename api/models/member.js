const mongoose = require('mongoose');
const memberSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String
    },
    password:{
        type: String
    }
});

module.exports = mongoose.model('Member', memberSchema);