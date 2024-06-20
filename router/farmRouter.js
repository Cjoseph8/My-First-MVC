const express =require('express');
const {create, getOne, getAll, upDate, deleteAni, getAllMatured, animalNotSold, sellAnimal}= require('../controller/farmController');

const router = express.Router();

router.post('/create-animal', create)

router.get('/create-animal', getAll)

router.get('/create-animal/:id', getOne)

router.put('/create-animal/:id', upDate)

router.delete('/create-animal/:id', deleteAni)

router.get('/create-animalMat', getAllMatured)

router.get('/create-animalMat',  animalNotSold)

router.get('/create-animalMat', sellAnimal)

module.exports = router