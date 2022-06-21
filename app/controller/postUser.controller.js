postUserController = {
    post: async (request ,response)=>{
        //console.log ("testing works");
        return await response.send(" view works") ;    
    } 
}
module.exports = postUserController