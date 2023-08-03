

const express = require('express');


const app = express();

const trainerRoutes = require('./routes/trainer.routes');

app.use('/api/admin', trainerRoutes);



app.listen(6000, () => {
    console.log('Server started!');
});