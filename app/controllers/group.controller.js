exports.create = (req, res) => {
  // Create and Save a new Group
  if(!req.body.content) {
    res.status(400).send({message: "Group can not be empty"});


  }

  // save issue

};

exports.findAll = function(req, res) {
  // Retrieve and return all groups from the database.
  res.send({groups: {name: 'test'}});

};

exports.findOne = function(req, res) {
  // Find a single group with a groupId
  res.send(req.params)

};

exports.update = function(req, res) {
  // Update a group identified by the groupId in the request

};

exports.delete = function(req, res) {
  // Delete a group with the specified groupId in the request

};
