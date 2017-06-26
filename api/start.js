const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();



mongoose.Promise = global.Promise;

const port = process.env.PORT;
const dbConnection = process.env.DB || 'localhost:27017/Trello';

console.log("port is " + port);

app.listen( port, () => {
  console.log(`Server running on port`);
});


try {
    mongoose.connect(dbConnection); //- starting a db connection
}catch(err) {
    mongoose.createConnection(dbConnection); //- starting another db connection
}
