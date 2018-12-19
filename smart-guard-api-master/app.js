var express = require('express');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var FacebookTokenStrategy = require('passport-facebook-token');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require("cors");
var models = require("./models");

var index = require('./routes/index');
var users = require('./routes/users');
var weather = require("./routes/weather");
var articles = require('./routes/articles');
var location = require("./routes/location");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

passport.use(new FacebookTokenStrategy({
    clientID: "187481808674854",
    clientSecret: "1cbb5df786850bba9d2d9130d486e9bf",
  }, function(accessToken, refreshToken, profile, done) {

  	console.log("Using Facebook token strategy...");
  	console.log("AccessToken: " + accessToken);
  	console.log("RefreshToken: " + refreshToken);
  	console.log("Profile:" + profile);

  	console.log("Searching for user with id in database...");
    models.User.find({
    	where : {
    		"facebookId" : profile.id
    	}
    }).then(user=>{
    	if (user) done(null,user.getJWTData());
    	else{
    		models.User.create({
    			"facebookId" : profile.id
    		}).then(new_user=>{
    			done(null,new_user.getJWTData());
    		})
    	}
    })


  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});



app.use(passport.initialize());
app.use(cors());

// Public api
app.use("/web/public/articles", require("./routes/web/public/articles"));

// Mobile api
app.use('/mobile/nearby', require('./routes/mobile/nearby'));
app.use("/mobile/locationpings", require("./routes/mobile/locationpings"));
app.use("/mobile/articles", require("./routes/mobile/articles"));
app.use("/mobile/users", require("./routes/mobile/users"));
app.use("/mobile/dangers", require("./routes/mobile/dangers"));

// passport.authenticate('facebook-token')
// Mobile api
app.use('/', index);
app.use('/users', users);
app.use('/weather',weather);
app.use('/articles',articles);
app.use('/location', location);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
