require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const bcrypt = require('bcrypt');
const multer = require('multer');
const favicon = require('serve-favicon')
const cors = require('cors')


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(x => {
        console.log(
            `Connected to Mongo! Database name: "${x.connections[0].name}"`
        );
    })
    .catch(err => {
        console.error('Error connecting to mongo', err);
    });
const app = express()

app.use(
    session({
      store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 24 * 60 * 60, // 1 day
      }),
      secret: process.env.SECRET_SESSION,
      resave: true,
      saveUninitialized: true,
      cookie: {
        maxAge: 24 * 60 * 60 * 1000,
      },
    })
  );

  // CORS MIDDLEWARE SETUP
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'],
  })
);
//   app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST OPTIONS, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var index = require('./routes/index');
var signup = require ('./routes/signup')
var login = require ('./routes/login')
var logout = require ('./routes/logout')
var remove = require ('./routes/remove')
var perfil = require ('./routes/perfil')
var players = require ('./routes/player')
var enemigos = require ('./routes/enemigos')
//var chat = require ('./routes/chat')



app.use('/',index);
app.use ('/signup',signup)
app.use ('/login', login)
app.use ('/logout', logout)
//app.use ('/perfil', remove)
app.use ('/perfil', perfil)
app.use ('/enemigos', enemigos)
app.use ('/players', players)
// app.use ('/chat', chat)






module.exports = app;

