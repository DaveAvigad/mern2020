const mongoose = require('mongoose');
const { DB_USER, DB_PASS, DB_HOST } = require('./constants');
const User = require('./user');

const url = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}`;
const options = { useNewUrlParser: true };

mongoose
    .connect(url, options)
    .then(db => console.log('connected to: ', db.connection.name))
    .catch(err => console.error('some error occurred', err));

// OR using events:
/* mongoose.connect(url, options)
const connection = mongoose.connection;

connection.on('error', err => console.error('connection error: ', err));
connection.once('open', () => console.log('connected to: ', connection.name));
 */