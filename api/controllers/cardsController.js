const mongoose = require('mongoose'); //Import mongoose
const Card = require('../models/Card'); //Import the board's model
const List = require('../models/List')
//Get all the cards
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

//Add a card
function createCard(req, res) {

  req.body.idList
  const bodyCard = { 
    description: req.body.description ? req.body.description : "",
    comment: req.body.comment ? req.body.comment : "",
    idMembers: req.body.idMembers ? req.body.idMembers : [],
    dueDate: req.body.dueDate ? req.body.dueDate : "",
    items: req.body.items ? req.body.items : "",
    labels: req.body.labels ? req.body.labels : "",
    idBoard: req.body.idBoard ? req.body.idBoard : "",
    idList: req.body.idList ? req.body.idList : ""
  }

  const card = new Card(bodyCard);
  card.save(err => {
    if (!err) {
      console.log("el id de la lista es: " + req.body.idList);
      List.findOneAndUpdate(
        { "_id": req.body.idList },
        {$push: {idCards: card._id}},


        (error, list) => {
          if (!error) {

            console.log('card!');
            res.status(201);
            res.json(list);
          }
          else {
            res.status(404);
            res.json(err);
          }
        })
    }
    
    else {
      res.status(404);
      res.json(err);
    }
  });
}


//Update a card
function updateCard(req, res) {
  Card.findOneAndUpdate({ _id: req.params._id }, req.body, (err, data) => {
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

//Delete a card
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