const bcrypt = require('bcryptjs');

const users = [

  {   
    email: 'admin@canadian.com',
    password: bcrypt.hashSync('123456', 10),
  },
  { 
    email: 'michelle@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    email: 'ahmed@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    email: 'nabeel@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },

]

module.exports = users;