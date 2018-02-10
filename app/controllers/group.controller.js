const AWS = require("aws-sdk");
const Guid = require('guid');

AWS.config.update({
  region: "us-west-2"
});

const docClient = new AWS.DynamoDB.DocumentClient();

const table = "barter"

exports.create = (req, res) => {
  // Create and Save a new Group
  if(!req.body.content) {
    res.status(400).send({message: "Group can not be empty"});
 

  }else{
    let group = req.body;
    let user = req.locals.user;

    console.log(req.locals.user);

    let params = {
      TableName:table,
      Item:{
          "GroupID": Guid.raw(),
          "groupName": group.name,
          "user": {
            "firstName" : user.firstName
          }
      } 
  }

  console.log("Adding a new group...");
  docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});
  res.send();

};

  // save issue

};

exports.findAll = function(req, res) {
  // Retrieve and return all groups from the database.
  res.send();

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
