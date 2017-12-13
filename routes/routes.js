
// ---------------------User ROUTES ------------------------//

const userController = require('../controllers/userController');

module.exports = function(app) {

    app.get('/', function(req, res){
        res.send('Index page initialized.');
    });


    //Register a User

    // app.post('/users/register/', function(req, res){
    app.post('/new-account', function(req, res){
       userController.register(req, function(err, data){
            if(err){
                res.send(err);
                return;
            }

            res.send(data);
        });
    });

    //Login a User
    app.post('/login', function(req, res){
       userController.login(req, function(err, data){
            if(err){
                res.send(err);
                return;
            }

            res.send(data);
        });
    });

    //Update User
    app.post('/users/:id/update/', userController.update);

    //Delete User
    app.delete('/users/:id/delete/', userController.delete);

    //User Details
    app.get('/users/:id/', userController.details);

    //All User Details
    app.get('/users/', userController.all_details);


};
