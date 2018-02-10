

const AWS = require("aws-sdk");
const Guid = require('Guid');

AWS.config.update({
  region: "us-west-2"
});

let docClient = new AWS.DynamoDB.DocumentClient();

let table = "barter"





exports.create = (req, res) => {
  // Create and Save a new Event
  if(!req.body.content) {
    res.status(400).send({message: "Event can not be empty"});


  }

  // save issue

};

exports.findAll = function(req, res) {
  // Retrieve and return all events from the database.
  let params = {
    TableName:table,
    Item:{
        "GroupID": Guid.raw(),
        "groupName": "testName2"
       
        
    }
};

console.log("Adding a new item...");
docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});
  res.send();

};

exports.findOne = function(req, res) {
  // Find a single event with a eventId
  res.send();

};

exports.update = function(req, res) {
  // Update a event identified by the eventId in the request

};

exports.delete = function(req, res) {
  // Delete a event with the specified eventId in the request

};
