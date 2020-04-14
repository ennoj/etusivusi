const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

///// USER MODEL /////
const User = require('../models/User');

///// LOGIN /////
router.get('/login', (req, res) => res.render('GET @/login'));

///// REGISTER /////
router.get('/register', (req, res) => res.render('GET @/register'));

///// REGISTER HANDLE /////
router.post('/register', (req, res) => {
  // TEST: console.log(req.body);
  const { name, email, password, password2 } = req.body;
  let errors = [];

  // Check required fields
  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Täytä vaaditut kentät' });
  }

  // Check whether passwords match
  if (password !== password2) {
    errors.push({ msg: 'Salasanat eivät täsmää' });
  }

  // Check password length
  if (password.length < 6) {
    errors.push({ msg: 'Salasanan täytyy olla AINAKIN KUUSI MERKKIÄ pitkä' });
  }

  if (errors.length > 0) {
    // Muuta kun otat Reactin käyttöön
    res.render('register', {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
    // Validation passed
    // Does the user already exist?
    User.findOne({ email: email }).then(user => {
      if (user) {
        // User exists
        errors.push({ msg: 'Sähköpostilla on jo ennestään rekisteröity' });
        res.render('register', {
          errors,
          name,
          email,
          password,
          password2
        });
      } else {
        // Create a user
        const newUser = new User({
          // E.g. "name: name"
          name,
          email,
          password
        });

        // TEST: console.log(newUser);

        // HASH PASSWORD
        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            // Set password to hashed
            newUser.password = hash;
            // Save user
            newUser
              .save()
              .then(user => {
                res.redirect('/users/login');
              })
              .catch(err => console.log(err));
          })
        );
      }
    });
  }
});

///// LOGIN HANDLE /////
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login'
  })(req, res, next);
});

///// LOGOUT HANDLE /////
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/users/login');
});

module.exports = router;
