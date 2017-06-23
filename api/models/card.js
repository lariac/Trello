const mongoose = require('mongoose');
const Card = require('./Card');
const cardSchema = new mongoose.Schema({
    description:{
        type: String,
    },
    comment:{
        type: String
    },
    idMembers: [{ type: mongoose.Schema.ObjectId, ref: 'Member'}],
    dueDate:{
        type: Date
    },
    items:{
        type: Array
    },
    labels:{
        type: Array
    },
    idBoard: { type: mongoose.Schema.ObjectId, ref: 'Board' },
    idList: { type: mongoose.Schema.ObjectId, ref: 'List' } 
});

module.exports = mongoose.model('Card', cardSchema);