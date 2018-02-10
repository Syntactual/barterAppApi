const express = require("express"),
    CognitoExpress = require("cognito-express"),
    port = process.env.PORT;

const app = express(),
    authenticatedRoute = express.Router(),
    cors = require('cors'),
    bodyParser = require('body-parser');

const cognitoExpress = new CognitoExpress({
  region: "us-west-2",
  cognitoUserPoolId: "us-west-2_laH0fT8n9",
  tokenUse: "access", //Possible Values: access | id
  tokenExpiration: 3600000 //Up to default expiration of 1 hour (3600000 ms)
});


app.use(cors());

app.use('/api/v1',function(req, res, next) {
  //I'm passing in the access token in header under key accessToken
  let accessTokenFromClient = req.get('accesstoken');

  //Fail if token not present in header. 
  if (!accessTokenFromClient) return res.status(401).send("Access Token missing from header");

  cognitoExpress.validate(accessTokenFromClient, function(err, response) {

      //If API is not authenticated, Return 401 with error message. 
      if (err) return res.status(401).send(err);

      //Else API has been authenticated. Proceed.
      res.locals.user = response;
      next();
  });
});

app.use(bodyParser.json());

require('./routes/items.routes.js')(app);
require('./routes/groups.routes.js')(app);
require('./routes/users.routes.js')(app);
require('./routes/events.routes.js')(app);

app.listen(3000, () => console.log('Example app listening on port 3000!'))

