import mongoose from "mongoose";
import patientSchema from './patient.model'

patientSchema.statics={
    get:function(query, cb){
        this.find(query,cb)
    },
    create:function(data,cb){
        var patientData = new this(data)
        patientData.save(cb)
    },
    updateOne:function(query, updateData, cb){
        this.findOneAndUpdate(query,{$set:updateData},cb)
    }, 
    delete: function(query,cb){
        this.findOneAndDelete(query,cb)
    }
}

var patientModel = mongoose.model("Patient", patientSchema, 'patient')
module.exports = patientModel