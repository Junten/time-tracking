import axios from 'axios';

export const GET_CUSTOMER = 'GET_CUSTOMER';
export const GET_CUSTOMER_ID = 'GET_CUSTOMER_ID';
export const GET_CUSTOMER_CONTACT = 'GET_CUSTOMER_CONTACT';
export const GET_CUSTOMER_PROJECT = 'GET_CUSTOMER_PROJECT';
export const GET_CUSTOMER_PROJECT_PHASE = 'GET_CUSTOMER_PROJECT_PHASE';


export const getCustomer = () => {

    const res = axios({
        method: 'get',
        url: "/api/customer/",
        responseType: 'json'
    });

    return ({
	    type: GET_CUSTOMER,
	    payload: res
    });
}

export const getCustomerId = (id) => {

    const res = axios({
        method: 'get',
        url: "/api/customer/" + id,
        responseType: 'json',
    });

    return ({
        type: GET_CUSTOMER_ID,
        payload: res
    });
}

export const getCustomerContact = () => {

    const res = axios({

        mothod: 'get',
        url: "",
        responseType: 'json'
    });

    return ({
        type: GET_CUSTOMER_CONTACT,
        payload: res
    });
}

export const getCustomerProject =() => {

    const res = axios({

        method: 'get',
        url:"",
        responseType: 'json'
    });

    return ({
        type: GET_CUSTOMER_PROJECT,
        payload: res
    });
}

export const getCustomerProjectPhase =() => {

    const res = axios({

        method: 'get',
        url:"",
        responseType: 'json'
    });

    return ({
        type: GET_CUSTOMER_PROJECT_PHASE,
        payload: res
    });
}