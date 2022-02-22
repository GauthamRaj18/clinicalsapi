import {
  getAll, getByID, create, update, deleteOne,
} from './patient/patient.controller';
import { getAll as getAllClinical, create as createClinical } from './clinicals/clinicals.controller';

const routes = (router) => {
  router.get('/patients', getAll);
  router.get('/patients/:id', getByID);
  router.post('/patients', create);
  router.put('/patients/:id', update);
  router.delete('/patients/:id', deleteOne);

  router.get('/clinicals/:patientId', getAllClinical);
  router.post('/clinicals', createClinical);
};

export default routes;
