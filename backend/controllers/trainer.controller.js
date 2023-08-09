


const testdata = require('../db/testdata.json');

const getAllTrainers = async (req, res) => {
    try {
        res.status(200).json(testdata);
    }
    catch (error) {
        res.status(404).json({ "message": "error getting trainers" });
    }
}

const getTrainer = async (req, res) => {
    try {
        const id = req.params.trainerID;
        const trainer = testdata.find(trainer => trainer.trainerID == id);
        res.status(200).json(trainer);
    } catch (error) {
        res.status(404).json({ "message": "error getting a single trainer" });
    }
}

const getStatusOfTrainer = async (req, res) => {
    try {
        const id = req.params.trainerID;
        const trainer = testdata.find(trainer => trainer.trainerID == id);
        res.status(200).json(trainer.status);
    } catch (error) {
        res.status(404).json({ "message": "error getting a single trainer approve status" });
    }
}

const updateApproveStatus = async (req, res) => {
    try{
        const id = req.params.trainerID;
        const trainer = testdata.find(trainer => trainer.trainerID == id);
        trainer.status = req.body.status;
        res.status(200).json(trainer);
    }
    catch(error){
        res.status(404).json({ "message": "error updating approve status" });
    }
}



module.exports = {
    getAllTrainers,
    getTrainer,
    getStatusOfTrainer,
    updateApproveStatus
}