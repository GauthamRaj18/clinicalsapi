import express, { Router } from 'express';
import { urlencoded, json } from 'body-parser';
import { PORT } from './config/properties.cjs';
import db from './config/db';
import clinicalRoutes from './routes';

const app = express();
db();

app.use(urlencoded({ extended: true }));
app.use(json());

const clinicalRouter = Router();
clinicalRoutes(clinicalRouter);
app.use('/clinicalsapi', clinicalRouter);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Application started on ${PORT}`);
});

export default app;
