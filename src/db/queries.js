const {query} = require('express');
const {append} = require('express/lib/response');

//const req = require('express/lib/request')
//const res = require('express/lib/response')

const Pool = require('pg').Pool
const pool = new Pool({
        user : 'admin', //database username
        host : 'localhost',
        database : 'userman', //let's call the database user management
        password : 'admin12345', //use own password
        port : 5432,
});

 //get all users in a database

 const getUsers = (req,res)=>{ 
    pool.query('SELECT * FROM users ORDER BY id ASC', (error,results)=>{
        if(error){
            throw error;
           }
           res.status(200).json(results.rows)
    });
    };
     
    //get a single user by ID
    const getUserById = (req,res)=>{//we want to select a user by using their ID
        const id = parseInt(req.params.id)
        pool.query('SELECT * FROM users WHERE id = $1', [id],(error, results)=>
        {
            if (error){
                throw error;
            }
            res.status(200).json(results.rows)
        })
    }
    //post a new user
    const createUser = (req,res)=>{ 
    const {name,email,password,phonenumber} = req.body;//define tor initialize the values
    pool.query('INSERT INTO users (name,email,password,phonenumber) Values ($1,$2,$3,$4) RETURNING id',[name,email,password,phonenumber], (error,results)=>{
            if(error){
                throw error;
            }
            res.status(201).send(`user added with ID:${results.rows[0].id}`);
        
        });
    };
     
    //PUT UpdateD data in an existing error
    const updateUser = (req,res)=>{
    const id = parseInt(req.params.id)
    const {name,email,password,phonenumber} = req.body;

    pool.query('UPDATE users SET name = $1,email =$2, password = $3, phonenumber =$4 WHERE id =$5',[name,email,password,phonenumber,id],
    (error,results) =>{
        if (error){
            if (error)
            throw error;
        }
        res.status(200).send(`user modified with ID: ${id}`)
    })
    }  
//delete a user
const deleteUser = (req,res)=>{
    const id = parseInt(req.params.id)
    pool.query('DELETE from users where id = $1',[id], (error ,results)=>{
        if(error)
        {
            throw error;
        }
        res.status(200).send(`users deleted with ID: ${id}`)//`back ticks for referencing
    })
}

    //Exporting CRUD functions as modules to REST API 
    module.exports = {
        getUsers,
        getUserById,
        createUser,
        updateUser,
        deleteUser
    }
        
        

    