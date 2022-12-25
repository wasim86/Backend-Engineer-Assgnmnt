const express= require("express")
const mongoose= require("mongoose")
mongoose.set('strictQuery', false)
const services= require("./services/services")
const app= express()

app.use(express.json())

mongoose.connect("mongodb+srv://Wasim:sjdwsm86@mycluster.hazwc4e.mongodb.net/Backend-Engineer")
.then(()=>console.log("mongoose is connectd"))
.catch((err)=>console.log(err))

app.use("/",services)

app.listen(3000,()=>{
    console.log("server is listening at 3000 PORT")
})