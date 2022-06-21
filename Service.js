const  express = require("express");
const app = express();
const json = express.json()
//const bodyparser = require('body-parser');// body-parser It returns a function that acts as middleware

//Serve JSON rEQUEST
app.use(json)//HAVE to use app.use since body-parser has depreciated

//Serve post request
app.use(express.urlencoded({extended:false}))
//declaration 
const port = 7000;

//creating endpoint for view user

const viewUser = require("./app/routes/viewUser");
const postUser = require("./app/routes/postUser");

 
app.use('/main', viewUser);
app.use('/main', postUser);
app.post('/sendingData' , (request, response)=>{
    console.log(re,body);
})
//Server
app.listen(port,(err)=>{
    if (err){
        console.log("Server not running");}
        else
        {
            console.log("Server is running at port 7000")

        }
})