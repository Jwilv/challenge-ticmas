const mongoose = require('mongoose');

export const dbConnection = async () => {
    mongoose.set('strictQuery', true);
    try {
        await mongoose.connect('mongodb://notUser:notPassword@localhost:27020/');
        console.log('DB online');
    } catch (error) {
        console.log(error)
        throw new Error('ERROR al inicializar DB')
    }
}