var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const CustomerData = new Schema({
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
        type: Schema.Types.ObjectId,
        ref: 'CustomerContact'
      
    },

    PoNumber: {
        type: Number,
        trim: true
    },

    TimeTrackingDetail: Number,
    
    InactiveData: Date
});

const CustomerContact = new Schema({
    CustomerID: {
        type: Schema.Types.ObjectId,
        ref: 'CustomerData'
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

    InactiveData: Date
});

const CustomerProject = new Schema({
    CustomerID: {
        type: Schema.Types.ObjectId,
        ref: 'CustomerDataSchema'
    },

    ProjectName: {
        type: String,
        trim: true
    },

    StartDate: {
        type: Date
    },

    EndDate: {
        type: Date
    },

    Description: {
        type: String,
        trim: true
    },

    Hours: {
        type: Number,
        trim: true
    },

    AmountAllocated: {
        type: Number
    }

});

const CustomerProjectPhase = new Schema({

});

exports.CustomerData = CustomerData;

exports.CustomerContact = CustomerContact;





