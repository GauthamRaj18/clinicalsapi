import { connect } from 'mongoose';
import { DB } from './properties.cjs';

export default () => {
  connect(DB);
};
