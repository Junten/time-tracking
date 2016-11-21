import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import ShowCustomer from './components/show_customer';
import NewCustomer from './components/new_customer';
import ShowCustomerId from './components/show_customer_id';
import ShowCustomerContact from './components/new_customer_contact';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ShowCustomer} />
    <Route path="/customer/new" component={NewCustomer} />
    <Route path="/customer/:id" component={ShowCustomerId} />
    	<Route path="/customer-contact/edit/:id" component={ShowCustomerContact}/>
  </Route>
);