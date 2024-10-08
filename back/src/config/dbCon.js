
require("dotenv").config();
const mongoose = require("mongoose");

const dbCon = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Conectando a la DB');
    } catch (error){
        console.log('Error al conectar la BDD', error);

    }
};

module.exports = {dbCon};