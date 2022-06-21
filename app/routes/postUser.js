const  express = require("express");
const app = express();

//creating endpoint for GET
app.post('/testingPost', (request ,response)=>{
    response.send("posting works");
   // console.log(request.body);     //created by J
   //response.send(request.body);       //created by J

})
module.exports = app