import { each } from '../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/async';
//same as Traversy's "app.js" file

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');




    // connecting our pages..
    //var index = require('./routes/index');
    //var tasks = require('./routes/tasks')




//var port = 3000

var app = express();

//View Engine
app.set('views', path.join (__dirname, 'views'));
app.set('view engine,' 'ejs');
app.engine('html', require('ejs').renderFile);

//Set Static Folder
app.use(express.static(path.join(__dirname, 'client'));

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



    //Our pages connecting to api
    //app.use('/', index);
    //app.use('/api', tasks);

//app.listen(port, function(){
    //console.log('Server started on port' +port);
//});


