import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getCustomerId } from '../actions/index';

class ShowCustomerId extends Component {
	componentWillMount() {
		this.props.getCustomerId(this.props.params.id);
	}

	renderCustomerData = () => {
		const { customer } = this.props;

		if (customer) {
			return (
				<div>
					<h4>{customer.CustomerName}</h4>
					<h5>{customer.Email}</h5>
					<p>{customer.Address}, {customer.City}</p>
					<p> {customer.State} {customer.Zip}</p>
				</div>
			);
		}

		return(
			<div>
				<h4>Lording...</h4>
			</div>
		);
	}

	render = () => {
		return (
			<div>
				<Link to="/">Back to Home</Link>
				<h3>{ this.renderCustomerData() }</h3>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { customer: state.customers.customerId };
}

export default connect(mapStateToProps, { getCustomerId })(ShowCustomerId);