const mongoose = require('mongoose');
const authSchema = new mongoose.Schema({
    nameEmail:{
        type: String
    },
    password:{
        type: String
    }
});

module.exports = mongoose.model('Auth', authSchema);
