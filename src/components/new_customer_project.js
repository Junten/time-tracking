import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import axios from 'axios';

class NewCustomerProject extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onDataSubmit(props) {
        props.customerId = this.props.params.id;
        
        const res = axios({
            method: 'post',
            url: "/api/customer-project/",
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
                <h3> Edit Customer</h3>
                <Field name="Email" type="email" component={renderField} label="Email"/>
                <Field name="FirstName" type="text" component={renderField} label="FirstName"/>
                <Field name="LastName" type="text" component={renderField} label="LastName"/>
                <Field name="MiddleInitial" type="text" component={renderField} label="MiddleInitial"/>
                <Field name="FullName" type="text" component={renderField} label="FullName"/>
                <Field name="Address2" type="text" component={renderField} label="Address2"/>
                <Field name="City" type="text" component={renderField} label="City"/>
                <Field name="State" type="text" component={renderField} label="State"/>
                <Field name="Zip" type="text" component={renderField} label="Zip Code"/>
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
    if (!values.Email) {
        errors.Email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
        errors.Email = 'Invalid email address';
    }

    return errors;
}


export default reduxForm({
  form: 'NewCustomerProject',  // a unique identifier for this form
  validate               // <--- validation function given to redux-form
})(NewCustomerProject)


