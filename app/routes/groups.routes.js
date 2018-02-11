module.exports = (app) => {
    let groups = require('../controllers/group.controller.js');

    // Create a new group
    app.post('/groups', groups.create);

    // Retrieve all groups
    app.get('/groups', groups.findAll);

    // Retrieve a single group with groupId
    app.get('/group', groups.findOne);

    // Update a group with groupId
    app.put('/groups/:groupId', groups.update);

    // Delete a group with groupId
    app.delete('/groups/:groupId', groups.delete);
}
