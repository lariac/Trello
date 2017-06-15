const List = require('./List');
const Card = require('./Card');
const mongoose = require('mongoose');
const boardSchema = new mongoose.Schema({
    title:{
        type: String,
    },
    idMembers: [{ type: mongoose.Schema.ObjectId, ref: 'Member'}]
});

boardSchema.post('remove', function (doc) {
   console.log("ENTRE AL ESQUEMA de BORRAR BOARD!");
    List.remove({ idBoard: this._id }).exec();
    Card.remove({ idBoard: this._id }).exec();
});

module.exports = mongoose.model('Board', boardSchema);
