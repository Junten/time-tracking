import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getCustomer } from '../actions/index';

class ShowCustomer extends Component {
	componentDidMount() {
		this.props.getCustomer();
	}

	renderCustomer = () => {
		var outputNodes = this.props.customers.map( (customer) => {
			return (
				<div key={customer._id}>
					<Link to={"customer/" + customer._id}>
						<h4>{ customer.CustomerName }</h4>
					</Link>
				</div>
			);
		});

		return (
            <div>
                {outputNodes}
            </div>
        );
	}
	render = () => {
		return (
			<div>
				<Link to="/customer/new">Add New Customer</Link>
				{ this.renderCustomer() }
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { customers: state.customers.all };
}

export default connect(mapStateToProps, { getCustomer })(ShowCustomer);