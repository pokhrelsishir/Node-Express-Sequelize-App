'use strict'

//var swaggerUi = require('swagger-ui-express');
//var swaggerDocument = require('../swagger/swagger-definition.json')

var noteRouter = require("./note/note.router.js");

var register = function (app) {
    app.use('/', noteRouter);
    //app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

module.exports = register;