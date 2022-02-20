import dao from './clinical.dao'

exports.getAll=(req,res)=>{
    dao.get({patient:req.params.patientId}, 
        (err, clinicalsData)=>{
            if (err) console.log(err)
            res.send(clinicalsData)
    })
}

exports.create=(req,res)=>{
    var clinicals = req.body
    dao.create(clinicals, (err, clinicals)=>{
        if (err) console.log(err)
        res.send(clinicals)
    })
}
