import patientController from './patient/patient.controller'
import clinicalsController from './clinicals/clinicals.controller'

module.exports=(router)=>{
    router.get('/patients', patientController.getAll)
    router.get('/patients/:id', patientController.getByID)
    router.post('/patients', patientController.create)
    router.put('/patients/:id', patientController.update)
    router.delete('/patients/:id', patientController.delete)

    router.get('/clinicals/:patientId', clinicalsController.getAll)
    router.post('/clinicals', clinicalsController.create)

}