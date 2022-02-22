import { Schema } from 'mongoose';

const ClinicalsSchema = Schema({
  componentName: String,
  componentValue: String,
  patient: {
    type: Schema.Types.ObjectId,
    ref: 'Patient',
  },
});

export default ClinicalsSchema;
