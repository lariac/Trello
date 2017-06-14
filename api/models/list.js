const mongoose = require('mongoose');
const listSchema = new mongoose.Schema({
    title:{
        type: String,
    },
    idBoard: { type: mongoose.Schema.ObjectId, ref: 'Board' },
    idCards: [{ type: mongoose.Schema.ObjectId, ref: 'Card'}]
});

module.exports = mongoose.model('List', listSchema);