require('./db_connection');

const User = require('./user');

const user = new User({
  name: 'Tereza Fernandes',
  age: 19,
  status: 'C',
  groups: ['e', 'f', 'g'],
});

user.save((err, result) => {
  if (err)
    throw err;

  console.log('new user has been saved!');
});
