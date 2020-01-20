import { handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';
const INIT_DEFAULT = Immutable({
  isBb: false
});

const auth = handleActions({
},INIT_DEFAULT);

export {
  auth
};
