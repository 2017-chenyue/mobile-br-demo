import reducer from './reducers';
import {createStore, applyMiddleware, compose} from 'redux';
import ThunkMiddleware from 'redux-thunk';

export default createStore(reducer, compose(applyMiddleware(ThunkMiddleware)));