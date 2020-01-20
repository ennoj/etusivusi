const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const passport = require('passport')
require('dotenv/config')

const app = express()

///// PASSPORT CONFIG /////
// require('./config/passport')(passport)

///// CONNECT TO MONGODB /////
mongoose.connect(process.env.DB_CONN, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => {
	console.log('***** MONGO DB CONNECTED *****')
})

// EJS - Poista kun React on käytössä (muista myös views)
//app.use(expressLayouts)
//app.set('view engine', 'ejs')

///// CORS /////
app.use(cors())

///// BODYPARSER /////
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

///// PASSPORT MIDDLEWARE /////
app.use(passport.initialize())
app.use(passport.session())

///// ROUTET /////
// Login and registeration
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

// Links
app.use('/links', require('./routes/links'))

const PORT = process.env.PORT || 5555

app.listen(PORT, console.log(`***** SERVERI KÄYNNISSÄ - PORTISSA ${PORT} *****`))
