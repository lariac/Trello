const mongoose = require('mongoose'); //Import mongoose
const Board = mongoose.model('board'); //Import the board's model

//Get all the boards 
function getBoards(req, res) {
  Board.find().exec(function (err, data) {
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
      res.json(note);
    }
    else {
      res.status(404);
      res.json(err);
    }
  });
}


//Update a board 
function updateBoard(req, res) {
  Board.findOneAndUpdate({ _id: req.body._id }, req.body, (err, data) => {
    if (!err) {
      res.status(201);
      res.json(data);
    }
    else {
      res.status(404);
      res.json(err);
    }
  });
}

//Delete a board
function deleteBoard(req, res) {
  Board.findByIdAndRemove({ _id: req.body._id }, req.body, (err, data) => {
    if (!err) {
      res.status(204);
      res.json(data);
    }
    else {
      res.status(500);
      res.json(err);
    }
  });
}

const actions = {
  getBoards,
  createBoard,
  updateBoard,
  deleteBoard
}

module.exports = actions;