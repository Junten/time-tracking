import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import customerReducer from './reducer_customers';


const rootReducer = combineReducers ({
	customers: customerReducer,
	form: formReducer
});

export default rootReducer;