const CustomerModel= require("../models/CustomerModel")

const createCustomer= async function(req,res){
    try{
        let data= req.body
        let createCustomer= await CustomerModel.create(data)
        return res.status(201).send({status:true,data:createCustomer})

    }
    catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}

//_______________________get data_______________________________//


const getCustomerData= async function(req,res){
    try{
        let getData= await CustomerModel.find({status:"ACTIVE"})
        return res.status(200).send({status:true,data:getData})

    }
    catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}


//____________________________delete Data________________________//


const deleteCustomerData= async function(req,res){
    try{
        let CustomerId= req.params.CustomerId
        let check= await CustomerModel.findOne({_id:CustomerId,isDeleted:false})
        if(check==null){
            return res.status(400).send({status:false,message:"request is not correct"})

        }

        let deleteData= await CustomerModel.findOneAndUpdate({_id:CustomerId},{isDeleted:true,deletedAt:Date.now()},{new:true})
        return res.status(200).send({status:true,data:deleteData})

    }
    catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}


module.exports= {createCustomer,getCustomerData,deleteCustomerData}
