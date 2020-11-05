require('dotenv').config();
const colors = require('colors');
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
            `Connected to Mongo! Database name: "${x.connections[0].name.rainbow}"`
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
    origin: ['http://localhost:3000', 'https://ironleaguehack.firebaseapp.com/', 'https://ironleaguehack.web.app/'],
  })
);
  app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://ironleaguehack.firebaseapp.com/', 'http://localhost:3000', 'https://ironleaguehack.web.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST OPTIONS, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


let index = require('./routes/index');
let signup = require ('./routes/signup');
let login = require ('./routes/login');
let logout = require ('./routes/logout');
let remove = require ('./routes/remove');
let perfil = require ('./routes/perfil');
let players = require ('./routes/player');
let enemigos = require ('./routes/enemigos');
let user = require("./routes/user");

//let chat = require ('./routes/chat')



app.use('/',index);
app.use ('/signup',signup)
app.use ('/login', login)
app.use ('/logout', logout)
//app.use ('/perfil', remove)
app.use ('/perfil', perfil)
app.use ('/enemigos', enemigos)
app.use ('/players', players)
app.use ("/user", user)
// app.use ('/chat', chat)






module.exports = app;

