const express =require('express')
const mongoose=require('mongoose')
const app=express()
const router=require('./route.js')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://Wasim:sjdwsm86@mycluster.hazwc4e.mongodb.net/MyClustor", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', router)

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
})