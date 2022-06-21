viewUserController = {
    view : async (request ,response)=>{
        //console.log ("testing works");
        return await response.send(" view works") ;    
    } 
}
module.exports =viewUserController