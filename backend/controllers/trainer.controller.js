


const testdata = require('../db/testdata.json');
const trainerController = {

    getTrainers: async (req, res) => {
        try {
            res.status(200).json(testdata);
        } catch (error) {
            res.status(404).json({ "message": "error getting trainers" });
        }
    }
    ,
    getTrainer: async (req, res) => {
        try {
            const id = req.params.trainerID;
            const trainer = testdata.find(trainer => trainer.trainerID == id);
            res.status(200).json(trainer);
        } catch (error) {
            res.status(404).json({ "message": "error getting a single trainer" });
        }
    }
    ,
    getApproveStatus: async (req, res) => {
        try {
            const id = req.params.trainerID;
            const trainer = testdata.find(trainer => trainer.trainerID == id);
            res.status(200).json(trainer.status);
        } catch (error) {
            res.status(404).json({ "message": "error getting a single trainer approve status" });
        }
    }
    ,
    updateApproveStatus: async (req, res) => {
        try{
            const id = req.params.id;
            const trainer = testdata.find(trainer => trainer.id == id);
            trainer.approved = req.body.approved;
            res.status(200).json(trainer);
        }
        catch(error){
            res.status(404).json({ "message": "error updating approve status" });
        }
    }
}

module.exports = trainerController;