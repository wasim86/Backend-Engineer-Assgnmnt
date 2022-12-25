const customerModel=require('./customerModel.js')

const createCustomer=async (req,res)=>{
  const data=req.body
  
  const {emailId,mobileNumber,customerID}=data

  const check=await customerModel.findOne({$or:[{emailId},{mobileNumber},{customerID}]})
  
  if(check){
    if(check.emailId==emailId){
      return res.status(400).send({status:false,message:"Email ID is not unique!"})
    }

    if(check.mobileNumber==mobileNumber){
      return res.status(400).send({status:false,message:"Mobile No. is not unique!"})
    }
    if(check.customerID==customerID){
      return res.status(400).send({status:false,message:"Customer ID is not unique!"})
    }
  }

  const createdData=await customerModel.create(data)
  res.status(201).send({status:true,customer:createdData})
}

const fetchCustomer=async(req,res)=>{
  const customers=await customerModel.find({status:'ACTIVE'})
  res.status(200).send({customers})
}
module.exports={createCustomer,fetchCustomer}