import { model } from 'mongoose';
import ClinicalsSchema from './clinicals.model';

ClinicalsSchema.statics = {
  get(query, cb) {
    this.find(query, cb);
  },
  create(data, cb) {
    const clinicalData = new this(data);
    clinicalData.save(cb);
  },
  // updateOne:function(query, updateData, cb){
  //     this.findOneAndUpdate(query,{$set:updateData},cb)
  // },
  // delete: function(query,cb){
  //     this.findOneAndDelete(query,cb)
  // }
};

const clinicalsModel = model('Clinicals', ClinicalsSchema, 'clinicals');
export default clinicalsModel;
