const express=require('express')
const bodyParser=require('body-parser')
const cors = require('cors');
require('./predict')
const mongoose=require('mongoose')
const predict=mongoose.model('predict')
const {mongoUrl}=require('./key')



const app=express()
const PORT = 3000
mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log('connected to mongodb')
}) 
mongoose.connection.on('error',(err)=>{
    console.log('connecting to mongodb is failed: ', err)
})

app.get('/',async(req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    const result=await predict.find().sort({ _id: -1 }).limit(1);
    // const a= new predict({amount_of_rain:'100',temperature:'20',humidity:'20%',type_of_rain:'mưa to'})
    // await a.save()
    res.send(result)
})



app.listen(PORT,()=>{
    console.log("server running: "+PORT)
})

