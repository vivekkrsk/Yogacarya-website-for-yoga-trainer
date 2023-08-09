const express = require('express');
const app = express();
const trainerRoutes = require('./routes/trainer.routes');
const PORT = process.env.PORT || 5050;
require('dotenv').config();

app.use('/api/v1/admin', trainerRoutes);


app.listen(PORT, () => {
    console.log(`Server is listening on PORT : ${PORT}`);
});