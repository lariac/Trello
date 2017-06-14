const mongoose = require('mongoose'); //Import mongoose
const Card = mongoose.model('card'); //Import the board's model

//Get all the boards 
function getCards(req, res) {
  Card.find().exec(function (err, data) {
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
function createCard(req, res) {
  const card = new Card(req.body);
  Card.save(err => {
    if (!err) {
      res.status(201);
      res.json(card);
    }
    else {
      res.status(404);
      res.json(err);
    }
  });
}


//Update a board 
function updateCard(req, res) {
  Card.findOneAndUpdate({ _id: req.body._id }, req.body, (err, data) => {
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
function deleteCard(req, res) {
  Card.findByIdAndRemove({ _id: req.body._id }, req.body, (err, data) => {
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
  getCards,
  createCard,
  updateCard,
  deleteCard
}

module.exports = actions;