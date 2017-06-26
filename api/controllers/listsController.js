const mongoose = require('mongoose'); //Import mongoose
const List = require('../models/List'); //Import the board's model

//Get all the lists from a specific board
function getListByBoardId(req, res) {
  List.find({ idBoard: req.params._id }).populate('idCards').exec((err, data) => {
    if (!err) {
      res.status(201);
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
  console.log("el id de la lista es: " + req.params._id);
  console.log("res es: " + res);

  List.findOneAndUpdate(
    { "_id": req.body._id },
    {
      "$set": {
        "title": req.body.title,
        "idBoard": req.body.idBoard,
        "idCards": [req.body.idCards]
      }
    },
    (err) => {
      if (!err) {

        console.log('card!');
        console.log(list.idCards)

        res.status(201);
        res.json(list);
      }
      else {
        res.status(404);
        res.json(err);
      }
    }
  );
}

//Delete a List
function deleteList(req, res) {
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
  getListByBoardId,
  createList,
  updateList,
  deleteList
}

module.exports = actions;