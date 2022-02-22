import { model } from 'mongoose';
import patientSchema from './patient.model';

patientSchema.statics = {
  get(query, cb) {
    this.find(query, cb);
  },
  create(data, cb) {
    const patientData = new this(data);
    patientData.save(cb);
  },
  updateOne(query, updateData, cb) {
    this.findOneAndUpdate(query, { $set: updateData }, cb);
  },
  deletes(query, cb) {
    this.findOneAndDelete(query, cb);
  },
};

const patientModel = model('Patient', patientSchema, 'patient');
export default patientModel;
