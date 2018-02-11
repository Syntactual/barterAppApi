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
    console.log(req.body);
    let username = res.locals.username;
    let groupID = Guid.raw();
    //console.log(req.locals);
    let paramsUser = {
      TableName: "Users",
      Item : {
        username: username,
        groupID : groupID
      }
      
    };
    let params = {
      TableName:table,
      Item:{
          "GroupID": groupID,
          "groupName": group.name,
          "createDate" : Date.now,
          "meets": [{
            meetDate: group.meetDate,
            //items : [],
            users: [{
              username: username,
             // itemsClaimed: [],
              //itemsSubmitted: []
            }]
          }]
      } 
  };

  console.log("Adding a new group...");
  docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", data);
    }
});
docClient.put(paramsUser, (err, data)=> {
  if (err) {
    console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
} else {
    console.log("Added item:", data);
}
});
    res.send({ status: 'SUCCESS' });

};

  // save issue

};

exports.findAll = function(req, res) {
  // Retrieve and return all groups from the database.
  res.send();

};

exports.findOne = function(req,res) {
  // Find a single group with a groupId
  //find group by username
  console.log("findOne");
  let username = res.locals.username;
  let params = {
    TableName: users,
    Key:{
      username : username
      
      
    }
    
};

docClient.get(params, (err, data) => {
  if (err) {
      console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
      res.send()
  } else {
      console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
      let nextParams = {
        TableName: table,
        Key:{
          GroupID: data.Item.groupID
        }
      }
      docClient.get(nextParams, (err, data)=> {
        if (err) {
          console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
          res.send()
      } else {
        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
        res.send(data);
      }
      });
      
  }
});
  

};

exports.update = function(req, res) {
  // Update a group identified by the groupId in the request

};

exports.delete = function(req, res) {
  // Delete a group with the specified groupId in the request

};
