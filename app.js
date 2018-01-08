const express = require ('express');
const app = express();
const bodyParser= require('body-parser');
const config = require('./config.js');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const PORT = process.env.PORT || 3000;



//Passport Middleware

app.use(passport.initialize());
app.use(passport.session());

require('./passport.js')(passport);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


mongoose.connect(config.mongoUrl, {
  useMongoClient: true
});

require('./routes/routes')(app);

app.get('/', (req, res) =>{
  res.send('Invalid Endpoint');
});

//Index Route
//app.listen(config.port, function() {
  //console.log(`Iris app server listening on port ${config.port}...`)
//});
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))


//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));