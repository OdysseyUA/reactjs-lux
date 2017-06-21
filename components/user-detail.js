import React from 'react';

import { connect } from 'react-redux'
import UserDetail from './user-detail';

import PropTypes from 'prop-types';


class UserDetails extends React.Component {

	render() {
		return (
			<div>
				<h1>THIS IS PARAM FROM GRIDCOMPONENT: {this.props.params.id}</h1>
				{
					this.props.details.map((detail, i)=> {
						return <UserDetail key={i} detail={detail}/>
					})
				}
			</div>
		)
	}
}

UserDetails.propTypes = {
	details: PropTypes.array.isRequired
};

function mapStateToProps(state) {
	return {
		details: state.details
	}
}


export default connect(mapStateToProps)(UserDetails)