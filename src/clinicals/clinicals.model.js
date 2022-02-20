import mongoose from 'mongoose'


var ClinicalsSchema = mongoose.Schema({
    componentName: String,
    componentValue: String,
    patient:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    }
})

module.exports = ClinicalsSchema