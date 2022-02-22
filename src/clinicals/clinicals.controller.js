import clinicalsModel from './clinical.dao';

export function getAll(req, res) {
  clinicalsModel.get(
    { patient: req.params.patientId },
    (err, clinicalsData) => {
      if (err) console.log(err);
      res.send(clinicalsData);
    },
  );
}

export function create(req, res) {
  const clinicals = req.body;
  clinicalsModel.create(clinicals, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
}

// export { exports.cre, };
