exports.addCustomerData = (req, res, next) => {
    if (req.body) {
        req.db.CustomerData.create({
            CustomerName: req.body.CustomerName,
            Email: req.body.Email,
            Address: req.body.Address,
            City: req.body.City,
            State: req.body.State,
            Zip: req.body.Zip,
            PoNumber: req.body.PoNumber
        }, (err, docs) => {
            if (err) {
                console.error(err);
                next(err);
            } else {
                res.status(200).json(docs);
            }
        });
    } else {
        next(new Error('No data'));
    }
};

exports.getCustomerData = (req, res, next) => {
    req.db.CustomerData.find({}, {}, (err, docs) => {
        if (err) {
            console.error(err);
            next(err);
        } else {
            res.status(200).json(docs);
        }
    });
};

exports.getCustomerIdData = (req, res, next) => {
    if (req.params.id) {

        req.db.CustomerData.findById(req.params.id, {
            CustomerName: true,
            Email: true,
            Address: true,
            City: true,
            State: true,
            Zip: true,
            PoNumber: true
        }, (err, docs) => {
            if (err) {
                console.error(err);
                next(err);
            } else {
                res.status(200).json(docs);
            }
        });
    } else {
        next(new Error('No this id'));
    }
};

exports.addCustomerContactData = (req, res, next) => {
    if (req.body) {
        req.db.CustomerContact.create({
            CustomerID: req.body.customerId, 
            Email: req.body.Email,
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            MiddleInitial: req.body.MiddleInitial,
            LastName: req.body.LastName,
            FullName: req.body.FullName,
            Address1: req.body.Address,
            Address2: req.body.Address,
            City: req.body.City,
            State: req.body.State,
            Zip: req.body.Zip
        }, (err, docs) => {
            if (err) {
                console.error(err);
                next(err);
            } else {
                res.status(200).json(docs);
            }
        });
    } else {
        next(new Error('No data'));
    }
};

exports.getCustomerContactData = (req, res, next) => {
    req.db.CustomerContact.find({}, {}, (err, docs) => {
        if (err) {
            console.error(err);
            next(err);
        } else {
            res.status(200).json(docs);
        }
    });
};

exports.addCustomerProjectData = (req, res, next) => {
    if 
}

exports.getCustomerProjectData = (req, res, next) => {

}
