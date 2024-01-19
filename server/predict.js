const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    amount_of_rain:{
        type:String,
        required:true
    },
    temperature:{
        type:String,
        required:true
    },
    humidity:{
        type:String,
        required:true
    },
    type_of_rain:{
        type:String,
        required:true
    },
})


mongoose.model('predict',userSchema)