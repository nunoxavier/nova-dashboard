import { createStore } from 'redux';
import { countReducer } from './modules/reducer';

export const store = createStore(countReducer);
