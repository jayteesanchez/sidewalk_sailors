var express        = require('express'),
    mongodb        = require('mongodb'),
    mongoose       = require('mongoose'),
    bodyParser     = require('body-parser'),
    cookieParser   = require('cookie-parser'),
    connect        = require('connect'),
    passport       = require('passport'),
    session        = require('express-session'),
    path           = require('path'),
    favicon        = require('serve-favicon'),
    logger         = require('morgan'),
    methodOverride = require('method-override'), //used to manipulate POST
    MongoStore     = require('connect-mongo')(session),
    LocalStrategy  = require('passport-local').Strategy;

// routes
var routes = require('./routes/index');

var app    = express();
var router = express.Router();

// code to run in development mode
if (app.get("env") === "development") {
  mongoose.connect('mongodb://localhost:27017/sidewalk_sailors');
}

// production code
if (process.env.NODE_ENV === 'production') {
  mongoose.connect('mongodb://jaytee.sanchez:Capital22@ds041583.mongolab.com:41583/heroku_nq7f61dg');
  app.use(session({
    secret: 'keyboard cat',
    saveUninitialized: false, // don't create session until something stored
    resave: false, //don't save session if unmodified
    store: new MongoStore({
        url: 'mongodb://jaytee.sanchez:Capital22@ds041583.mongolab.com:41583/heroku_nq7f61dg',
        touchAfter: 24 * 3600 // time period in seconds
    })
  }));
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, 'public')));

if (app.get("env") === "development") {
  // auth middleware
  app.use(session({
    secret: 'jeong sings',
    resave: true,
    saveUninitialized: true
  }));
}

app.use(passport.initialize());
app.use(passport.session());

// passport config
var Pirate = require('./models/Pirate');
passport.use(new LocalStrategy(Pirate.authenticate()));
passport.serializeUser(Pirate.serializeUser());
passport.deserializeUser(Pirate.deserializeUser());
app.locals.title = 'Sidewalk Sailors';

app.use('/', routes);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
