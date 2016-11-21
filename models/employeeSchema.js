var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const EmployeeData = new Schema({
    Email: {
        type: String,
        trim: true
    },


});

const EmployeeEntitlement =new Schema({
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
});