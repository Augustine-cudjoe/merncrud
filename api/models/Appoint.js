const mongoose=require('mongoose')

const AppointSchema=new mongoose.Schema({
    firstName:String,
    secondName:String,
    title:String,
    comment:String,
    
})

const AppointModel = mongoose.model('todo',AppointSchema)

module.exports=AppointModel;