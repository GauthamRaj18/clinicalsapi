import mongoose from 'mongoose'


var PatientSchema = mongoose.Schema({
    firstName: String,
    secondName: String,
    age: Number,
    clinicals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Clinicals'
    }]

})


module.exports = PatientSchema
