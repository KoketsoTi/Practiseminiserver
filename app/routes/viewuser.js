const  express = require("express");
const app = express();

const viewUserController =  require('../Controller/viewUser.controller')
app.get('/view', viewUserController.view)

module.exports = app
