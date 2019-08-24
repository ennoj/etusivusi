const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash'); // Ei tarvii Reactin jälkeen
const session = require('express-session'); // Ei tarvii Reactin jälkeen
const passport = require('passport');

// Pitääkö olla server?
const app = express();

///// PASSPORT CONFIG /////
require('./config/passport')(passport);

///// MONGODB CONFIG /////
const db = require('./config/keys').MongoURI;

///// CONNECT TO MONGODB /////
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('***** MONGODB YHDISTETTY *****'))
  .catch(err => console.log(err));

// EJS - Poista kun React on käytössä (muista myös views)
app.use(expressLayouts);
app.set('view engine', 'ejs');

///// BODYPARSER /////
app.use(express.urlencoded({ extended: false }));

///// EXPRESS SESSION MIDDLEWARE - Ei tarvii Reactin jälkeen /////
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

///// PASSPORT MIDDLEWARE /////
app.use(passport.initialize());
app.use(passport.session());

///// CONNECT FLASH MIDDLEWARE - Ei tarvii Reactin jälkeen /////
app.use(flash());

///// GLABAL VARIABLES - Ei tarvii Reactin jälkeen /////
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

///// ROUTET /////
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`***** SERVU KÄYNNISSÄ, PORT ${PORT} *****`));
