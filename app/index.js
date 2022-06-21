
const express = require('express')
const bodyParser  = require('body-parser')
const app = express()
const port = 3000
const db = require('../db/queries')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended:true,
    })
)

app.get('/',(req,res)=>{
    res.json({info: 'Node.js,Express, and Postgres API'})
})

//Endpoint routes path binding to URL
app.get('/users',db.getUsers)
app.get('/users/:id', db.getUserByID)
app.post('/users',db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(port, ()=>{ 
    console.log('App running on port : ${port}.')
})
