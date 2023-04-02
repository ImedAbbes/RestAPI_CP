const {Schema , model} = require('mongoose')

const userSchema = new Schema({
    name : {type : String , required : true},
    age : Number,
    email : String
})

const User = model('user',userSchema)

module.exports = User