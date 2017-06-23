const mongoose = require('mongoose');
const Board = require('../models/Board');
const List = require('../models/List');

//Get a board by Id
function getBoardByUserId(req, res) {
  console.log("esto tiene req en get board by id!" + req.params._id);
  const x = ""
 // Board.find().where('idMembers').equals(req.params._id).exec((err, data) => {
   Board.find().where('idMembers').equals(req.params._id).exec((err, data) => {
    if (!err) {
      console.log("entr al if de get board by id");
      res.status(200);
      console.log("data en find es: " + data);
      res.json(data);
      console.log("ya escribi res!!");
    }
    else {
      console.log("entr al else de get board by id");
      res.status(404);
      res.json(err);
    }
  });
};

function getBoardById(req, res) {
    console.log("estoy en get board!" + req.params._id);
   Board.find({ _id: req.params._id }).populate('idMembers').exec((err, data) => {
    if (!err) {
      console.log("data !!" + data);
      res.status(200);
      res.json(data);
    }
    else {
      res.status(404);
      res.json(err);
    }
  });
};



//Add a board 
function createBoard(req, res) {
  const board = new Board(req.body);
  board.save(err => {
    if (!err) {
      res.status(201);
      res.json(board);
    }
    else {
      res.status(404);
      res.json(err);
    }
  });
}

//Update a board 
function updateBoard(req, res) {
  console.log("El id es: ");
  Board.findOneAndUpdate({ _id: req.params._id }).exec((err, board) => {
    if (!err) {
      console.log("SIN ERROR!");
      res.status(201);
      res.json(board);
    }
    else {
      res.status(404);
      res.json(err);
    }
  });
}

//Delete a board
function deleteBoard(req, res) {
  /* Board.findByIdAndRemove({ _id: req.body._id }, req.body, (err, data) => {
     if (!err) {
       res.status(204);
       res.json(data);
     }
     else {
       res.status(500);
       res.json(err);
     }
   }); */
  console.log("ESTE ES EL ID: " + req.params._id);
  Board.findById({ _id: req.params._id }, function (err, board) {
    if (!err) {
      console.log("board eliminado: " + board);
      res.json(board);
      board.remove();
      res.status(201);
    }
    else {
      res.status(404);
      res.json(err);
    }
  });
}

const actions = {
  getBoardById,
  getBoardByUserId,
  createBoard,
  updateBoard,
  deleteBoard
}

module.exports = actions;