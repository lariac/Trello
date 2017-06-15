const mongoose = require('mongoose'); //Import mongoose
const List = require('../models/List'); //Import the board's model

//Get all the lists from a specific board
function getListById(req, res) {
  List.findById({ _id: req.params._id }).populate('idBoard, idCards').exec((err, data) => {
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
function createList(req, res) {
  const list = new List(req.body);
  list.save(err => {
    if (!err) {
      res.status(201);
      res.json(list);
    }
    else {
      res.status(404);
      res.json(err);
    }
  });
}

//Update a List
function updateList(req, res) {
  List.findOneAndUpdate({ _id: req.body._id }, req.body, (err, data) => {
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

//Delete a List
function deleteList(req, res) {
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

  List.findById({ _id: req.params._id }, function (err, list) {
    if (!err) {
      console.log("list a eliminar: " + list);
      res.json(list);
      list.remove();
      res.status(201);
    }
    else {
      res.status(404);
      res.json(err);
    }
  });
}

const actions = {
  getListById,
  createList,
  updateList,
  deleteList
}

module.exports = actions;