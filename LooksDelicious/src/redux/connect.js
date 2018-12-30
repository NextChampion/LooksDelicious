import { connect as connectRedux } from 'react-redux';
import * as R from 'ramda';

export function connect(keys) {
  console.log('keys');
  return connectRedux(R.pick(keys));
}
