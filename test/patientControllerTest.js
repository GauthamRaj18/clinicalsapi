let chai = require('chai')
let chaiHttp = require('chai-http')
const { BASEURL } = require('../src/config/properties')

let expect = chai.expect
chai.use(chaiHttp)
const baseUrl = BASEURL

describe('Patient Api', ()=>{

    before(()=>{
        console.log("Runs once before the tests")
        id = '6211e11ed7cda43c414d6db4'

        patient = {
            "firstName": "Gautham",
            "secondName": "Raj",
            "age": 50
        }
    })

    // after(()=>{
    //     console.log("Runs once after the tests")
    // })
    // beforeEach(()=>{
    //     console.log("Is executed in between before each test")
    // })
    // afterEach(()=>{
    //     console.log("Is executed in between after each test")
    // })

    it('Get all patients', ()=>{
        return chai.request(baseUrl).get('/patients').then((res)=>{
            expect(res).to.have.status(200);
        }).catch((err)=>{
            throw err
        })
    })
    
    it('Create patient', ()=>{
        return chai.request(baseUrl)
        .post('/patients')
        .send(patient).
        then((res)=>{
            expect(res).to.have.status(200);
        }).catch((err)=>{
            throw err
        })
    })

    it('Get single patient', ()=>{
        return chai.request(baseUrl)
        .get('/patients/'+id)
        .then((res)=>{
            expect(res).to.have.status(200);
        }).catch((err)=>{
            throw err
        })
    })

    it('Update patient', ()=>{
        return chai.request(baseUrl)
        .put('/patients/'+id)
        .send(patient).
        then((res)=>{
            expect(res).to.have.status(200);
        }).catch((err)=>{
            throw err
        })
    })

    // it('Delete patient', ()=>{
    //     return chai.request(baseUrl)
    //     .delete('/patients/'+id)
    //     .then((res)=>{
    //         expect(res).to.have.status(200);
    //     }).catch((err)=>{
    //         throw err
    //     })
    // })

})