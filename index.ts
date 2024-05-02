import express from 'express';
import { dbConnection } from './src/config/dbConfig';
import { config } from 'dotenv'
import taskRouter from './src/app/infrastructure/secondary/routes/routes-task';
const cors = require('cors')

//obtenemos env con su config
config();

//crear el servidor de express
export const app = express();

//Data Base
dbConnection();

//CORS 
app.use(cors())

//lectura y parceo del body
app.use(express.json())

//rutas
app.use('/api/task', taskRouter);

//escuchar peticiones
// se obtiene el proceso de env y apuntamos/obtenemos el puerto 
export const server = app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
    ///
});
