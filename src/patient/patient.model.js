import { Schema } from 'mongoose';

const PatientSchema = Schema({
  firstName: String,
  secondName: String,
  age: Number,
  clinicals: [{
    type: Schema.Types.ObjectId,
    ref: 'Clinicals',
  }],

});

export default PatientSchema;
