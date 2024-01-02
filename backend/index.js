const express = require("express");
const mongoose = require("mongoose")
const app = express();
const path = require('path');

app.use(express.json())
require("dotenv").config();
const cors = require("cors")

const propertyRouter = require("./Routes/propertyRoutes");
const mapRouter = require("./Routes/mapRoutes");
const supplyRouter = require("./Routes/supplyRoutes");

const userRouter = require("./Routes/userRoutes");

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')));
app.use("/files",express.static('public/uploads'));

app.use( '/admin',userRouter)
app.use( '/property',propertyRouter)
app.use( '/user', userRouter)
app.use( '/map', mapRouter)
app.use( '/supply', supplyRouter)

app.get('*' , (req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})

app.listen(process.env.PORT||3005 , ()=>{
    console.log(`App Listening at Port 3005`)
})
 
mongoose.connect(process.env.MOUNT_PAKISTAN_URI || MONGODB_URI).then(err=>{
        console.log("Connected")
})