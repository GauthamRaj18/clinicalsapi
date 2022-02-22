import patientModel from './patient.dao';

export function getAll(req, res) {
  patientModel.get({}, (err, patients) => {
    if (err) console.log(err);
    res.send(patients);
  });
}

export function getByID(req, res) {
  patientModel.get({ _id: req.params.id }, (err, patient) => {
    if (err) console.log(err);
    res.send(patient);
  });
}

export function create(req, res) {
  const patient = req.body;
  patientModel.create(patient, (err, patientRes) => {
    if (err) console.log(err);
    res.send(patientRes);
  });
}

export function update(req, res) {
  const patient = {
    // "firstName": req.params.firstName,
    // "secondName": req.params.secondName,
    age: req.body.age,
  };
  patientModel.updateOne({ _id: req.params.id }, patient, (err, patientRes) => {
    if (err) console.log(err);
    res.send(`patient data updated${patientRes}`);
  });
}
export function deleteOne(req, res) {
  patientModel.delete({ _id: req.params.id }, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
}
