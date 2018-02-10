const AWS = require("aws-sdk");
const Guid = require('guid');

AWS.config.update({
  region: "us-west-2"
});

const docClient = new AWS.DynamoDB.DocumentClient();

const table = "barter"

exports.create = (req, res) => {
  // Create and Save a new Group
  if(!req.body) {
    res.status(400).send({message: "Group can not be empty"});

  }else{
    let group = req.body;
    // let username = req.locals.username;

    console.log(req.locals);

    let params = {
      TableName:table,
      Item:{
          "GroupID": Guid.raw(),
          "groupName": group.name,
          "user": {
            "firstName" : 'test'
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
    res.send({ status: 'SUCCESS' });

};

  // save issue

};

exports.findAll = function(req, res) {
  // Retrieve and return all groups from the database.
  res.send({message:'sdasd'});

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
