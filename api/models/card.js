const mongoose = require('mongoose');
const cardSchema = new mongoose.Schema({
    description:{
        type: String,
    },
    comment:{
        type: String
    },
    idMember:{
        type: Array
    },
    dueDate:{
        type: Date
    },
    items:{
        type: Array
    },
    labels:{
        type: Array
    }
});

module.exports = mongoose.model('Card', cardSchema);