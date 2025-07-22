const User=require('../models/user')
const Injury=require('../models/injury')

exports.createInjury=async(req,res)=>{
    var newInjury=req.body.newInjury
    newInjury.userID=req.body.id
    try{
        const newI=new Injury(newInjury)
        await newI.save()
        return res.status(201).send({message:'Injury created successfully',data:newI})
    }catch(error){
        console.error('Error creating injury',error)
        return res.status(500).send({message:'Error creating injury',error})
    }
}

exports.getAllInjuries=async(req,res)=>{
    const id=req.params.id
    try{
        const injuries=await Injury.find({userID:id})
        return res.status(200).send({message:'Injuries retrieved successfully',data:injuries})
    }catch(error){
        console.error('Error retrieving injuries',error)
        return res.status(500).send({message:'Error retrieving injuries',error})
    }
}