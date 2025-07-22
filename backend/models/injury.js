const mongoose=require('mongoose')

const Injury=new mongoose.Schema({
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    status:{
        type:String,
        enum:['Recovering','Recovered','Not Recovered'],
        default:'Active'
    },
    treatment:{
        type:String,
        required:true
    },
    severity:{
        type:String,
        enum:['Mild','Moderate','Severe'],
        required:true
    },
    doctor:{
        type:String,
        required:true
    },
    recommendations:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Injury', Injury);