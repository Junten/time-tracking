import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import ShowCustomer from './components/show_customer';
import NewCustomer from './components/new_customer';
import ShowCustomerId from './components/show_customer_id';
import NewCustomerContact from './components/new_customer_contact';
import NewCustomerProject from './components/new_customer_project';
import NewCustomerProjectPhase from './components/new_customer_project_phase';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ShowCustomer} />
    <Route path="/customer/new" component={NewCustomer} />
    <Route path="/customer/:id" component={ShowCustomerId} />
    	<Route path="/customer-contact/edit/:id" component={NewCustomerContact}/>
    	<Route path="/customer-project/edit/:id" component={NewCustomerProject}/>
    	<Route path="/customer-project-phase/edit/:id" component={NewCustomerProjectPhase}/>
  </Route>
);