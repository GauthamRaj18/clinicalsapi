// // /* eslint-disable no-undef */
// import chai, { use, request } from 'chai';
// import chaiHttp from 'chai-http';
// import { BASEURL } from '../src/config/properties.cjs';

// const { expect } = chai;
// use(chaiHttp);
// const baseUrl = BASEURL;

// describe('Patient Api', () => {
//   before(() => {
//     console.log('Runs once before the tests');
//   });

//   // after(()=>{
//   //     console.log("Runs once after the tests")
//   // })
//   // beforeEach(()=>{
//   //     console.log("Is executed in between before each test")
//   // })
//   // afterEach(()=>{
//   //     console.log("Is executed in between after each test")
//   // })
//   // const id = '6211e11ed7cda43c414d6db4';

//   // const patient = {
//   //   firstName: 'Gautham',
//   //   secondName: 'Raj',
//   //   age: 50,
//   // };
//   it('Get all patients', () => request(baseUrl).get('/patients').then((res) => {
//     expect(res).to.have.status(200);
//   }).catch((err) => {
//     throw err;
//   }));

//   it('Create patient', () => request(baseUrl)
//     .post('/patients')
//     .send(patient)
//     .then((res) => {
//       expect(res).to.have.status(200);
//     })
//     .catch((err) => {
//       throw err;
//     }));

//   it('Get single patient', () => request(baseUrl)
//     .get(`/patients/${id}`)
//     .then((res) => {
//       expect(res).to.have.status(200);
//     }).catch((err) => {
//       throw err;
//     }));

//   it('Update patient', () => request(baseUrl)
//     .put(`/patients/${id}`)
//     .send(patient)
//     .then((res) => {
//       expect(res).to.have.status(200);
//     })
//     .catch((err) => {
//       throw err;
//     }));

//   // it('Delete patient', ()=>{
//   //     return chai.request(baseUrl)
//   //     .delete('/patients/'+id)
//   //     .then((res)=>{
//   //         expect(res).to.have.status(200);
//   //     }).catch((err)=>{
//   //         throw err
//   //     })
//   // })
// });
