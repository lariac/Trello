const mongoose = require('mongoose');
const Board = require('../models/Board');
const List = require('../models/List');

//Get a board by Id
function getBoardByUserId(req, res) {
  const x = ""
   Board.find().where('idMembers').equals(req.params._id).exec((err, data) => {
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

function getBoardById(req, res) {
   Board.find({ _id: req.params._id }).populate('idMembers').exec((err, data) => {
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
  Board.findOneAndUpdate({ _id: req.params._id }).exec((err, board) => {
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

//Delete a board
function deleteBoard(req, res) {
  Board.findById({ _id: req.params._id }, function (err, board) {
    if (!err) {
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