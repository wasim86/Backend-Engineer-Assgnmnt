const mongoose= require("mongoose")

const customerSchema= new mongoose.Schema({

    firstName: String,
    lastName :String,
    mobileNumber: String,
    DOB:{type:Date},
    emailID:String,
    address: String,
    customerID :String,
    status: {type:String,enum:["ACTIVE","INACTIVE"]},
    isDeleted:{type:Boolean,default:false},
    deletedAt:{type:Date,default:null}    
},{timestamps:true})

module.exports= mongoose.model("Customer",customerSchema)