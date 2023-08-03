const express = require('express');
const router = express.Router();


const trainerController = require('../controllers/trainer.controller');

// Retrieve all trainers
router.get('/trainers', trainerController.getTrainers);

// Get single trainer
router.get('/trainers/:trainerID', trainerController.getTrainer);

//get approve status of trainer
router.get('/trainers/:trainerID/approve', trainerController.getApproveStatus);

// update approve status of trainer
router.put('/trainers/:trainerID/approve', trainerController.updateApproveStatus);


module.exports = router;