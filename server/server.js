import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { PORT } from './Constants/index.js';
import 'dotenv/config.js';
import errorMiddleware from './middleware/errors.js';


import connectDatabase from './Config/db.js'
import admin from './Route/Admin.js';
import kontorer from './Route/Kontorer.js'

//lager "app" med express slik at vi får satt opp server
const app = express();
//initialiserer at app skal bruke json
app.use(express.json());

//morgan for bedre feilmeldinger i development mode
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//bruker cors til å tilate trafikk fra client?
app.use(cors({
  origin: 'http://localhost:3000',
  allowedHeaders: ['Content-Type']
}))


//url som blir brukt localhost:5000/api/v1/user
app.use(`${process.env.BASEURL}/admin`, admin);

//url som blir brukt localhost:5000/api/v1/kontorer
app.use(`${process.env.BASEURL}/kontorer`, kontorer);

//global error håndtering
app.use(errorMiddleware);

//koble til databasen
connectDatabase();

//se hvilken url det er til server
console.log(`URL: http://localhost:5000${process.env.BASEURL}/`)

//server for apiet
const server = app.listen(
  PORT,
  console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

//for å håndtere uhåndterte errors, stopper serveren
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  console.log('Shutting down server due to Unhandled Promise Rejection');
  server.close(() => {
    process.exit(1);
  });
});
