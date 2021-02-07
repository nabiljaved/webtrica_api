const bcrypt = require('bcryptjs');

const users = [

  {   
    email: 'webtricapak123@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  { 
    email: 'nabeeljaved2029@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    email: 'asim@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    email: 'mehwish@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },

]

module.exports = users;