const User = require('../models/User')

const getUser = async(req,res) =>{
    const users = await User.find()
    res.send(users)
} 
const addUser = async(req,res)=>{
    User.create(
        {
            name : req.body.name,
            age : req.body.age,
            email : req.body.email
        }
    )
    res.send('user created')
}
const updateUser = async(req,res) =>{
    await User.updateOne(
        {name : req.body.name},
        {
            name : req.body.newName,
            age : req.body.newAge,
            email : req.body.newEmail
        }
    )
    res.send('user ' + req.body.name + ' is now updated')
}
const deleteUser = async(req,res)=>{
    const userToDelete = await User.deleteOne({name : req.body.name})
    if (userToDelete.deletedCount >0){res.send('user '+ req.body.name + ' deleted')}
    else res.send('user not found ')
}

module.exports = ({getUser, addUser, updateUser, deleteUser})