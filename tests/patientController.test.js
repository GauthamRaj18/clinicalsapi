import { expect } from 'chai';
import axios from 'axios';
import 'babel-polyfill';
// import { BASEURL } from '../src/config/properties.cjs';

const baseURL = 'http://localhost/clinicalsapi';

describe('Patient Controller tests', () => {
  test('test get all patients', async () => {
    const response = await axios.get(`${baseURL}/patients`);
    expect(response.status).to.equal(200);
  });

  test('test create a new patient', async () => {
    const data = {
      firstName: 'Gautham',
      secondName: 'Raj',
      age: 25,
    };
    const response = await axios.post(`${baseURL}/patients`, data);
    expect(response.status).to.equal(200);
  });

  test('test get patient by ID', async () => {
    // getting patientID this way is not ideal as the test depends on another API call
    const responseGetAll = await axios.get(`${baseURL}/patients`);
    // eslint-disable-next-line no-underscore-dangle
    const patientId = responseGetAll.data[0]._id;

    const responseOnePatient = await axios.get(`${baseURL}/patients/${patientId}`);
    expect(responseOnePatient.data[0]).to.have.all.keys('_id', 'firstName', 'secondName', 'age', 'clinicals', '__v');
  });
});
