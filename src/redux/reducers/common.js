import { handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';
const INIT_DEFAULT = Immutable({

});

const common = handleActions({
},INIT_DEFAULT);

export {
  common
};
