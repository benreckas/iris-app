
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
    //app.post('/users/:id/update/', userController.update);
    app.post('/', function(req, res){
       userController.update(req, function(err, data){
            if(err){
                res.send(err);
                return;
            }
            res.send(data);
        });
    });

    //Delete User
    //app.delete('/users/:id/delete/', userController.delete);
    app.delete('/', function(req, res){
       userController.delete(req, function(err, data){
            if(err){
                res.send(err);
                return;
            }
            res.send(data);
        });
    });

    //User Details
    //app.get('/users/:id/', userController.details);
    app.get('/', function(req, res){
       userController.details(req, function(err, data){
            if(err){
                res.send(err);
                return;
            }
            res.send(data);
        });
    });

    //All User Details
    //app.get('/users/', userController.all_details);
    app.get('/', function(req, res){
       userController.all_details(req, function(err, data){
            if(err){
                res.send(err);
                return;
            }
            res.send(data);
        });
    });

};
