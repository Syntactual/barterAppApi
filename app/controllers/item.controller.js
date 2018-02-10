exports.create = (req, res) => {
  // Create and Save a new Item
  if(!req.body.content) {
    res.status(400).send({message: "Item can not be empty"});
  }

  // save issue

};

exports.findAll = function(req, res) {
  // Retrieve and return all items from the database.

};

exports.findOne = function(req, res) {
  // Find a single item with a itemId

};

exports.update = function(req, res) {
  // Update a item identified by the itemId in the request

};

exports.delete = function(req, res) {
  // Delete a item with the specified itemId in the request

};
