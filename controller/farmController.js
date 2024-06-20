const farmModel = require('../model/farmModel.js')

const create = async(req,res)=>{
    try {
        const  {Age, Name, Breed, Colour,} = req.body;
let matured = false
if (Age >= 10){
    matured = true
}
        const animal = await farmModel.create({
            Name,
            Breed,
            Age,
            Colour,
            isMatured: matured
        });
        res.status(201).json({
            message: 'Animal porfile created Successfully.',
            data: animal
        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
        
    }
};
const getAll = async(req, res)=>{
    try{
        const allAnimals = await farmModel.find();
        if(allAnimals.length===0){
            return res.status(404).json({
            message:'Database currently Empty'
            })
        }else{
            res.status(200).json({
                message: `Total List of all Animals in this Data Base is : ${allAnimals.length}`,
                data: allAnimals,
                TotalNumberOfAnimals: allAnimals.length
            })
        }

    }catch(e){
        res.status(500).json({
            message: e.message
        })
    }
};

//get One 
const getOne = async(req, res)=>{
    try{
        const {id} = req.params
        const oneAnimal = await farmModel.findById(id);
        if(!oneAnimal) {
            res.status(404).json({
                message: `Animal with Id: ${id} is not Found on Data Base.`
            })
        }else{
            res.status(200).json({
                message: `Animal with this id: ${id} is Fetched out Successfully.`,
                data: oneAnimal
            })
        }

    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
};
//Update 
const upDate = async(req, res)=>{
    try{
        const updateId = req.params.id
       /* let matured = false
if (Age >= 10){
    matured = true
}*/
        const updateAnimal = await farmModel.findByIdAndUpdate(updateId, req.body, {new:true})
         if(!updateAnimal) {
            res.status(400).json({
                message:`Animal with ID: ${updateId} is not Updated Sucessfully.`
            })
         }else {
            res.status(200).json({
                message:`Animal with ID: ${updateId} is now Updated Successfully.`,
                data: updateAnimal
            })
         }
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
};

//Delete 
const deleteAni = async(req, res) =>{
    try{
        const deleteId = req.params.id
       const deleteAnimal = await farmModel.findByIdAndDelete(deleteId)
       if(!deleteAnimal) {
        res.status(404).json({
            message:`Animal with ID: ${deleteId} is not Deleted.`
        })
       }else {
        res.status(200).json({
            message:`Animal with ID: ${deleteId} is Successfully Deleted.`
        })
       }
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
};
// To get all Matured
const getAllMatured= async(req,res)=>{
    try {
        const matured= {isMatured:true};
        allMatured= await farmModel.find(matured);

        if(allMatured){
            res.status(200).json({
                message:'These are all the matured Animals:',
                data: allMatured,
                totalNumberofAnimal: allMatured.length
            })
         }else{
            res.status(404).json({
                message:'Matured Animals not found.',
            })
         }

        
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
        
    }
};
// TO GET ANIMAL NOT SOLD YET
const animalNotSold= async (req,res)=>{
    try {
        const notSold= {isSold:false};
        const animalNotSold= await farmModel.find(notSold);

        if(animalNotSold){
            res.status(200).json({
                message:'These are the list of Animals not sold:',
                data: animalNotSold,
                totalNumberofAnimalNotSold: animalNotSold.length
            })
        }else{
            res.status(404).json({
                message:'All animals have been sold.'
            })
        }
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
        
    }
};
// TO SELL AN ANIMAL
const sellAnimal= async(req,res)=>{
    try {
        const animalId=req.params.id
    const sellAnimal=await farmModel.findByIdAndUpdate(animalId,{new:true})

        if(!sellAnimal){
            res.status(404).json({
                message:`Animal with ID:${animalId} is not found.`,
            })
        }else{
            res.status(200).json({
                message:`Animal with ID:${animalId} is up for sale.`,
                data:sellAnimal
            })
        }

    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

module.exports = {
    create,
    getAll,
    getOne,
    upDate,
    deleteAni,
    getAllMatured,
    animalNotSold,
    sellAnimal
}