import { GET_CUSTOMER,  GET_CUSTOMER_ID } from '../actions/index';

const INITIAL_STATE = {
	all: [],
	customerId: null
};

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case GET_CUSTOMER: 
			return { ...state, all: action.payload.data };
		case  GET_CUSTOMER_ID:
			return { ...state, customerId: action.payload.data };
		default: 
			return state;
	}
}