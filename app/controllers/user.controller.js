exports.create = (req, res) => {
  // Create and Save a new User
  if(!req.body.content) {
    res.status(400).send({message: "User can not be empty"});
  }

  // save issue

};

exports.findAll = function(req, res) {
  // Retrieve and return all users from the database.

};

exports.findOne = function(req, res) {
  // Find a single user with a userId

};

exports.update = function(req, res) {
  // Update a user identified by the userId in the request

};

exports.delete = function(req, res) {
  // Delete a user with the specified userId in the request

};
