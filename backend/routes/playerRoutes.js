const express=require('express')
const router=express.Router()
const playerController= require('../controllers/playerController')

router.get('/injury/:id',playerController.getAllInjuries)

router.post('/injury',playerController.createInjury)

module.exports=router