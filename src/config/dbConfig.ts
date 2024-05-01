const mongoose = require('mongoose');

export const dbConnection = async () => {

    const { MONGO_DB_URL_DEV, MONGO_DB_URL_TEST, NODE_ENV } = process.env;

    const connection = NODE_ENV === 'test' ? MONGO_DB_URL_TEST : MONGO_DB_URL_DEV

    mongoose.set('strictQuery', true);
    
    try {
        await mongoose.connect(connection);
        console.log('DB online');
    } catch (error) {
        console.log(error)
        throw new Error('ERROR al inicializar DB')
    }
}