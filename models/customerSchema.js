var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const CustomerDataSchema = new Schema({
    CustomerName: {
        required: true,
        type: String,
        trim: true,
        match: /^([\w ,.!?]{1,100})$/ // match: /^([[:alpha:][:space:][:punct:]]{1,100})$/
    },

    Email: {
        type: String,
        trim: true
    },

    Address: {
        type: String,
        trim: true
    },

    City: {
        type: String,
        trim: true
    },

    State: {
        type: String,
        trim: true
    },

    Zip: {
        type: Number,
        trim: true
    },

    BillingContact: {
        // id: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'customerContact'
        // },
        name: String
    },

    PoNumber: {
        type: Number,
        trim: true
    },

    TimeTrackingDetail: Number,
    
    InactiveData: Date,
});

const CustomerContactSchema = new Schema({
    CustomerID: {
        type: Schema.Types.ObjectId,
        ref: 'CustomerDataSchema'
    },

    Email: {
        required: true,
        type: String,
        trim: true
    },

    FirstName: {
        type: String,
        trim: true
    },

    MiddleInitial: {
        type: String,
        trim: true
    },

    LastName: {
        type: String,
        trim: true
    },

    FullName: {
        type: String,
        trim: true
    },

    Address1: {
        type: String,
        trim: true
    },

    Address2: {
        type: String,
        trim: true
    },

    City: {
        type: String,
        trim: true
    },

    State: {
        type: String,
        trim: true
    },

    Zip: {
        type: Number,
        trim: true
    },

    InactiveData: Date,
});

const CustomerProject = new Schema({

});

const CustomerProjectPhase = new Schema({

});

exports.CustomerDataSchema = CustomerDataSchema;

exports.CustomerContactSchema = CustomerContactSchema;





