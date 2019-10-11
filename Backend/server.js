var express = require('express'),
  app = express(),
  cors = require('cors'),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  //Task = require('./api/models/todoListModel'), //created model loading here
  User = require('./api/models/userModel'),
  Anagram = require('./api/models/anagramModel'),
  FiveByFive = require('./api/models/fiveByFiveModel'),
  Chalice = require('./api/models/chaliceModel'),
  GameOfTheDay = require('./api/models/gameOfTheDayModel'),
  Result = require('./api/models/resultModel'),
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', { useNewUrlParser: true, useUnifiedTopology: true}); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//var routes = require('./api/routes/todoListRoutes'); //importing route
var routesUsers = require('./api/routes/userRoutes'); //importing route
routesUsers(app); //register the route
var routesAnagrams = require('./api/routes/anagramRoutes');
routesAnagrams(app);
var routesfiveByFives = require('./api/routes/fiveByFiveRoutes');
routesfiveByFives(app);
var routesChalices = require('./api/routes/chaliceRoutes');
routesChalices(app);
var routesGamesOfTheDay = require('./api/routes/gameOfTheDayRoutes');
routesGamesOfTheDay(app);
var routesResults = require('./api/routes/resultRoutes');
routesResults(app);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);


console.log('PIA server started on: ' + port);