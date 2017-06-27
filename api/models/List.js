const mongoose = require('mongoose');
const Card = require('./Card');
const listSchema = new mongoose.Schema({
    title:{
        type: String,
    },
    idBoard: { type: mongoose.Schema.ObjectId, ref: 'Board' },
    idCards: [{ type: mongoose.Schema.ObjectId, ref: 'Card' }],
});

listSchema.post('remove', function (doc) {
    console.log("ENTRE AL ESQUEMA de BORRAR LISTA!");
    Card.remove({ idList: this._id }).exec();
});

module.exports = mongoose.model('List', listSchema);