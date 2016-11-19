import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import axios from 'axios';

import { createCustomer } from '../actions/index';

class NewCustomer extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onDataSubmit(props) {
        // this.props.createCustomer(props)
        //     .then(() => {
        //     this.context.router.push('/');
        // });

        const res = axios({
            method: 'post',
            url: "/api/customer/",
            data: props,
            responseType: 'json'
        })
        .then(() => {
            var path = "/";
            this.context.router.push(path);
        });
    }

    render = () => {
        const { pristine, reset, submitting, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onDataSubmit.bind(this))}>
                <h3> Create New Customer</h3>
                <Field name="CustomerName" type="text" component={renderField} label="Customer name"/>
                <Field name="Email" type="email" component={renderField} label="Email"/>
                <Field name="Address" type="text" component={renderField} label="Address"/>
                <Field name="City" type="text" component={renderField} label="City"/>
                <Field name="State" type="text" component={renderField} label="State"/>
                <Field name="Zip" type="text" component={renderField} label="Zip Code"/>
                <Field name="PoNumber" type="text" component={renderField} label="PO Box Number"/>
                <div>
                    <button type="submit" disabled={submitting}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                </div>
            </form>
        );
    }
}

class renderField extends Component {
    render = () => {
        const { input, label, type, meta: { touched, error, warning } } = this.props;
        return (
            <div>
                <label>{label}</label>
                <div>
                    <input {...input} placeholder={label} type={type}/>
                    {touched && (error && <span>{error}</span>)}
                </div>
            </div>
        );
    }
}

const validate = (values) => {
    const errors = {};
    if (!values.CustomerName) {
        errors.CustomerName = 'Required';
    } else if (values.CustomerName.length > 50) {
        errors.CustomerName = 'Must be 50 characters or less!';
    }

    if (!values.Email) {
        errors.Email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
        errors.Email = 'Invalid email address';
    }

    return errors;
}


export default reduxForm({
  form: 'NewCustomer',  // a unique identifier for this form
  validate               // <--- validation function given to redux-form
})(NewCustomer)