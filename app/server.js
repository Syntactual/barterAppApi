const express = require('express')
const app = express()

app.get('/Group/:groupId', (req, res) => res.send(req.params))

require('./routes/items.routes.js')(app);

app.listen(3000, () => console.log('Example app listening on port 3000!'))