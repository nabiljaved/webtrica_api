const jwt = require('jsonwebtoken');
const User = require('../models/User');

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.status(400).json({error: "Not Authorized"})
        res.redirect('/login');
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect('/login');
  }
};


const redirectRoutes = (req, res, next) => {
  const token = req.cookies.jwt;
  
  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/login');
      } else {
        //console.log(decodedToken);
        res.redirect('/admin-dashboard');
      }
    });
  } else {
    next()
  }
};

const protectedRoutes = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    console.log(token)

    //console.log(token)
    const decoded = jwt.verify(token, process.env.JWT_SECRET) // securing secret key
    console.log("decoded token is  : "+decoded.id)

    const user = await User.findOne({_id: decoded.id})

    console.log("user id   "+user._id)

    if (!user) {
        throw new Error()
        console.log("no user")
    }
    req.user = user
    req.token = token      
    next()

} catch (error) {
    res.status(401).send({ errors: 'Please authenticate.' })
  }
};

// check current user
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};


module.exports = { requireAuth, checkUser, protectedRoutes, redirectRoutes};