import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {gameReducer} from './reducers';

export default createStore(gameReducer, applyMiddleware(thunk));