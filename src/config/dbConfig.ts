const mongoose = require('mongoose');

export const dbConnection = async () => {
    mongoose.set('strictQuery', true);
    try {
        await mongoose.connect('mongodb+srv://mern_user:iabwq7dXvCd5sgYy@cluster0.sxvlsh2.mongodb.net/ticmas');
        console.log('DB online');
    } catch (error) {
        console.log(error)
        throw new Error('ERROR al inicializar DB')
    }
}