const Board = require('./Board');
const mongoose = require('mongoose');
const express=require("express");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const memberSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

memberSchema.post('remove', function (doc) {
   console.log("ENTRE AL ESQUEMA!");
    Board.remove({ idMembers: this._id }).exec();
}); 

module.exports = mongoose.model('Member', memberSchema);