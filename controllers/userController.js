const User = require('../models/User');

// Create a User model instance
exports.register = function(req, callback) {
    console.log('Processing registration request...');    
    console.log(req.body);

    var registrationData = req.body;

    if(registrationData !== undefined && registrationData !== null && Object.keys(registrationData).length > 0) {
        var user = new User(registrationData);
        user.save();
        callback.call(false, 'Registration data for User has been successfully saved!')
        
    } else {
        callback.call('User was not registered!', false);        
    }

};


// Login a User
exports.login = function(req, res) {
    
};


// Update a User model instance
exports.update = function(req, res) {
    
};

// Delete a User model instance
exports.delete = function(req, res) {
    
};


// Display detail page for a specific User
exports.details = function(req, res) {
    
};

// Display list of all Users
exports.all_details = function(req, res) {
    
};
