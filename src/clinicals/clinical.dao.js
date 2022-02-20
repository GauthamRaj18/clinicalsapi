import mongoose from "mongoose";
import clinicalsSchema from './clinicals.model'

clinicalsSchema.statics={
    get:function(query, cb){
        this.find(query,cb)
    },
    create:function(data,cb){
        var clinicalData = new this(data)
        clinicalData.save(cb)
    },
    // updateOne:function(query, updateData, cb){
    //     this.findOneAndUpdate(query,{$set:updateData},cb)
    // }, 
    // delete: function(query,cb){
    //     this.findOneAndDelete(query,cb)
    // }
}

var clinicalsModel = mongoose.model("Clinicals", clinicalsSchema, 'clinicals')
module.exports = clinicalsModel