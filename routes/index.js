var express = require('express');
var passport = require('passport');
// models
var Pirate = require('../models/Pirate');
// router
var router = express.Router();


// require controllers
var piratesController      = require('../controllers/piratesController'),
    sessionsController     = require('../controllers/sessionsController'),
    homeController         = require('../controllers/homeController'),
    aboutController        = require('../controllers/aboutController'),
    treasuresController    = require('../controllers/treasuresController');

var authenticatePirate = passport.authenticate(
  'local',
  {failureRedirect: '/login'}
);

var isLoggedIn = function(req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/login');
  }
  return next();
};

var loadCurrentPirate = function(req, res, next) {
  if (req.session.passport) {
    Pirate
       .findOne({ username: req.session.passport.user })
       .then(
         function(user) {
          // attach the current User instance to the request
          req.currentUser = user;
          next();
         }, function(err) {
          return next(err);
         });
  } else {
    next();
  }
};

/* Home page */

router.get('/', homeController.index);

/* About page */
router.get('/about', aboutController.about);

/* Treasure CRUD */
router.get(  '/treasures',             treasuresController.index);
router.get(  '/treasures/new',         treasuresController.newTreasure);
router.get(  '/treasures/show/:id',     treasuresController.show);
router.get(  '/treasures/:id/edit',     treasuresController.edit);

// register
router.get(  '/register', piratesController.new);
router.post( '/register', piratesController.create);

// login
router.get(  '/login', sessionsController.new);
router.post( '/login', authenticatePirate, sessionsController.create);

// logout
router.get(  '/logout', sessionsController.destroy);

module.exports = router;
