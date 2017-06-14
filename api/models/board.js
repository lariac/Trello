const mongoose = require('mongoose');
const boardSchema = new mongoose.Schema({
    title:{
        type: String,
    },
    idMembers :  [{ type: mongoose.Schema.ObjectId, ref: 'Member'}]
});

module.exports = mongoose.model('Board', boardSchema);