const mongoose = require('mongoose');
const Board = require('../models/Board');
const List = require('../models/List');

//Get a board by Id
function getBoardById(req, res) {
  Board.findById({ _id: req.params._id }).populate('idMembers').exec((err, data) => {
    if (!err) {
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
  createBoard,
  updateBoard,
  deleteBoard
}

module.exports = actions;