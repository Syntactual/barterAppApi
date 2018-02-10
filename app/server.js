const express = require('express');
const app = express();

app.get('/Group/:groupId', (req, res) => res.send(req.params));

require('./routes/items.routes.js')(app);
require('./routes/groups.routes.js')(app);
require('./routes/users.routes.js')(app);

<<<<<<< HEAD
app.listen(3000, () => console.log('Example app listening on port 3000!'));
=======
app.listen(3000, () => console.log('Example app listening on port 3000!'))
>>>>>>> 2a85baad23abd5d2c3906c050b1dd67f1a0d9718
